import React, { useState, useContext } from "react";
import Cart from "../components/cart";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  Badge,
} from "reactstrap";

import Head from "next/head";

import Layout from "../components/layout";
import Cookie from "js-cookie";
import axios from "axios";

function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const [query, setQuery] = useState("");
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  const token = Cookie.get("token");
  console.log(`Token: ${token}`);

  return (
    <ApolloProvider client={client}>
      <Head></Head>
      
      <div className="search">
        <h2> Local Restaurants</h2>
        <InputGroup>
          <InputGroupAddon addonType="append"> Search </InputGroupAddon>
          <Input
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            value={query}
          />
        </InputGroup>
        <br></br>
      </div>
      <RestaurantList search={query} />
      <Cart> </Cart>
    </ApolloProvider>
  );
}
export default Home;
