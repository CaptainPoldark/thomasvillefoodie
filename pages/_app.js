import { useContext, useState } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Badge,
  Container,
} from "reactstrap";
import Link from "next/link";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import ApolloHelper from "../components/apolloHelper";

function MyApp(props) {
  const { Component, pageProps } = props;
  const token = Cookie.get("token");
  var {
    cart,
    addItem,
    removeItem,
    emptyCart,
    user,
    setUser,
    unsetUser,
    isAuthenticated,
    setRestID,
    restID,
  } = useContext(AppContext);
  const [state, setState] = useState({
    cart: cart,
  });
  const [restState, setRestState] = useState({
    restID,
  });
  const [userState, setUserState] = useState({
    user: user,
    isAuthenticated: isAuthenticated,
  });

  const apolloClient = ApolloHelper();
  /*   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache }); */

  setRestID = (ID, name) => {
    setRestState({ ID: ID, Name: name });
  };

  if (userState.isAuthenticated == false) {
    if (token) {
      // authenticate the token on the server and place set user object
      let config = {
        method: "get",
        url: "https://foodiedb.battlegroundls.com/api/users/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      /*     setUser = (user) => {
      setState({ user: user });
    }; */
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setUserState({ user: response.data, isAuthenticated: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
  setUser = () => {
    if (token) {
      // authenticate the token on the server and place set user object
      let config = {
        method: "get",
        url: "https://foodiedb.battlegroundls.com/api/users/me",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      /*     setUser = (user) => {
            setState({ user: user });
          }; */
      axios(config)
        .then(function (response) {
          if (token) {
            setUserState({ user: response.data, isAuthenticated: true });
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  unsetUser = () => {
    setUserState({
      user: {
        id: Number,
        username: String,
        email: String,
        provider: String,
        confirmed: Boolean,
        blocked: Boolean,
        createdAt: String,
        updatedAt: String,
      },
      isAuthenticated: false,
    });
  };
  addItem = (item) => {
    //check for item already in cart
    //if not in cart, add item if item is found increase quanity ++
    let foundItem = false;
    if (state.cart.items.length > 0) {
      foundItem = state.cart.items.find((i) => i.name === item.name);

      if (!foundItem) foundItem = false;
    } else {
      foundItem = false;
    }
    console.log(`Found Item value: ${JSON.stringify(foundItem)}`);
    // if item is not new, add to cart, set quantity to 1
    if (!foundItem) {
      //set quantity property to 1

      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      var newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price,
        fee: (state.cart.total + item.price) * 0.08,
        tax: (state.cart.total + item.price) * 0.04,
      };

      setState({ cart: newCart });

      console.log(`Total items: ${JSON.stringify(newCart)}`);
    } else {
      // we already have it so just increase quantity ++
      console.log(`Total so far:  ${cart.total}`);
      newCart = {
        items: state.cart.items.map((item) => {
          if (item.name === foundItem.name) {
            return Object.assign({}, item, { quantity: item.quantity + 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price,
        fee: (state.cart.total + item.price) * 0.08,
        tax: (state.cart.total + item.price) * 0.04,
      };
    }
    setState({ cart: newCart }); // problem is this is not updated yet

    //console.log(`state reset to cart:${JSON.stringify(state)}`);
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.name === item.name);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.name === foundItem.name) {
            return Object.assign({}, item, { quantity: item.quantity - 1 });
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
        fee: (state.cart.total - item.price) * 0.08,
        tax: (state.cart.total - item.price) * 0.04,
      };
      //console.log(`NewCart after remove: ${JSON.stringify(newCart)}`)
    } else {
      // only 1 in the cart so remove the whole item
      console.log(`Try remove item ${JSON.stringify(foundItem)}`);
      const index = items.findIndex((i) => i.name === foundItem.name);
      items.splice(index, 1);
      var newCart = {
        items: [],
        total: state.cart.total - item.price,
        fee: (state.cart.total - item.price) * 0.08,
        tax: (state.cart.total - item.price) * 0.04,
      };
    }

    setState({ cart: newCart });
  };
  emptyCart = () => {
    setState({ cart: { items: [], total: 0, tax: 0, fee: 0 } });
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        addItem: addItem,
        removeItem: removeItem,
        isAuthenticated: userState.isAuthenticated,
        user: userState.user,
        setUser: setUser,
        unsetUser,
        setRestID,
        emptyCart,
        restID: restState,
      }}
    >
      <ApolloProvider client={apolloClient}>
        <Layout></Layout>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppContext.Provider>
  );
}

export default MyApp;
