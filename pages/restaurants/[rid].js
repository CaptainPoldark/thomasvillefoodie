import { useRouter } from "next/router";
import Dishes from "../../components/dishes";
import AppContext from "../../components/context";
import { useContext, useState } from "react";
import Cart from "../../components/cart";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

const Restaurant = () => {
  const router = useRouter();
  const { rid } = router.query;
  const { restID } = useContext(AppContext);
  console.log(restID);

  const renderDishes = () => {
    return <Dishes> </Dishes>;
  };

  return (
    <Container>
      <h3>{restID.Name}</h3>
      <Row>
        <Col xs="4" sm="9" style={{ padding: "1em" }}>
          <Row sm="3">{renderDishes()}</Row>
        </Col>
        <Col xs="4" sm="3" style={{ padding: "1em" }}>
          <Cart> </Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Restaurant;
