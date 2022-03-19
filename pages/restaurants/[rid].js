import { useRouter } from "next/router";
import Dishes from "../../components/dishes";
import AppContext from "../../components/context";
import { useContext, useState } from "react";
import Link from "next/link";
import Cart from "../../components/cart";
import {
  InputGroup,
  InputGroupAddon,
  Input,
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
  const [dishSearch, setDishSearch] = useState("")
  const { restID } = useContext(AppContext);
  console.log(restID);

  const renderDishes = () => {
    return <Dishes search={dishSearch}> </Dishes>;
  };

  return (
    <Container>
      <h3>
        <Link href="/">
          <a>Home</a>
        </Link>
        \{restID.Name}
      </h3>
      <InputGroup>
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
          onChange={(e) => setDishSearch(e.target.value.toLocaleLowerCase())}
          value={dishSearch}
        />
      </InputGroup>
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
