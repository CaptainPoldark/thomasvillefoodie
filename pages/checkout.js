/* pages/checkout.js */

import React, { useContext } from "react";
import { Row, Col, Footer } from "reactstrap";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/checkoutForm";
import AppContext from "../components/context";
import Cart from "../components/cart";

function Checkout() {
  const STRIPE_PUBLIC_KEY =
    "pk_test_51KUL8gJDtFQDLEs1Hwb8wFvEns7jneiJIumEZC825rvqENis0p7jAE7Tg8PT58eIHg18ZtIlUT9J3Fg2qHpgO4U900Z2XCsawP";
  // get app context
  const { isAuthenticated, cart } = useContext(AppContext);
  // isAuthenticated is passed to the cart component to display order button
  //const isAuthenticated  = true;

  // load stripe to inject into elements components
  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20 }}>
          Checkout{" "}
          ${((cart.total + cart.fee + cart.tax)/100).toFixed(2)}
        </h1>
        <Cart isAuthenticated={isAuthenticated} />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
  // }
}
export default Checkout;
