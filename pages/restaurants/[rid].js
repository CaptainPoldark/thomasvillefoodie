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
      <InputGroup style={{margin: "1em", width:"90%"}}>
        <InputGroupAddon addonType="append"> Search </InputGroupAddon>
        <Input
          onChange={(e) => setDishSearch(e.target.value.toLocaleLowerCase())}
          value={dishSearch}
        />
      </InputGroup>
      <Row>
        <Col >
          <Row sm="3">{renderDishes()}</Row>
        </Col>
        <Col sm="3">
          <Cart> </Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Restaurant;
