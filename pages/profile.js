import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import OrderHistory from "../components/orderHistory";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
  Container,
} from "reactstrap";
import { login } from "../components/auth";
import AppContext from "../components/context";

function Profile(props) {
  let { user, isAuthenticated } = useContext(AppContext);

  return (
    <Container style={{ marginTop: "1em" }}>
      <Row>
        <Col>
          <Card style={{ margin: "0 1rem 1em 1em", height: "auto" }}>
            <CardImg top={true} style={{ height: "auto" }} src={``} />
            <CardBody>
              <CardTitle>
                <h3>Hey, {user.username}</h3>
              </CardTitle>
              <CardText>
                Here is your profile
                <br />
                <br />
                <h4 style={{ alignItems: "center" }}>
                  You'll be able to change your profile information in a future
                  update
                </h4>
              </CardText>
            </CardBody>
            <div className="card-footer">
              <Button disabled={true} color="success">
                Save
              </Button>
            </div>
          </Card>
        </Col>
        <Col>
          <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
            <CardBody>
              <CardTitle>
                <h3>All Orders</h3>
              </CardTitle>
              <CardText style={{ height: "35rem", overflow: "scroll" }}>
                <OrderHistory />
              </CardText>
            </CardBody>
            <div className="card-footer">
              {/* <Button
              color="info"
              outline
              onClick={(e) => {
                e.preventDefault();
                addItem(res.attributes);
              }}
            >
              + Add To Cart
            </Button> */}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
