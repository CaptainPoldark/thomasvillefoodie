import React, { useState, useContext } from "react";
import Cart from "../components/cart";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import RestaurantList from "../components/restaurantList";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Col,
  Row,
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
  const [query, setQuery] = useState("");
  /*   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
  console.log(`URL: ${API_URL}`);
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache }); */

  const token = Cookie.get("token");
  console.log(`Token: ${token}`);

  return (
    <>
      <Head></Head>
      <Container>
        <div className="search">
          <h2> Thomasville Foodie</h2>
          <InputGroup>
            <InputGroupAddon addonType="append"> Search </InputGroupAddon>
            <Input
              onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </InputGroup>
          <br></br>
        </div>

        <Row>
          <Col >
            <RestaurantList search={query} />
          </Col>
          <Col xs="4" sm="3" style={{ padding: 0 }}>
            <Cart> </Cart>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
