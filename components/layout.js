/* /components/Layout.js */

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem, Badge } from "reactstrap";
import { logout } from "../components/auth";
import AppContext from "./context";

const Layout = () => {
  const title = "Thomasville Foodie";
  let { user, isAuthenticated } = useContext(AppContext);
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
          `}
        </style>

        <Nav className="navbar navbar-dark bg-dark justify-content-end">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">Home</a>
            </Link>
          </NavItem>
          <NavItem>
            {isAuthenticated ? (
              <Link href="/profile">
                <a className="nav-link"> Settings </a>
              </Link>
            ) : (
              <Link href="/register">
                <a className="nav-link"> Sign up! </a>
              </Link>
            )}
          </NavItem>
          <NavItem>
            {isAuthenticated ? (
              <Link href="/">
                <a
                  className="nav-link"
                  onClick={() => {
                    logout();

                    AppContext.setUser(null);
                  }}
                >
                  Logout
                </a>
              </Link>
            ) : (
              <Link href="/login">
                <a className="nav-link">Sign in </a>
              </Link>
            )}
          </NavItem>
          {isAuthenticated ? (
            <Badge pill bg="primary">
              Hey, {user.username}
            </Badge>
          ) : (
            ""
          )}
        </Nav>
      </header>
      <Container></Container>
    </div>
  );
};

export default Layout;
