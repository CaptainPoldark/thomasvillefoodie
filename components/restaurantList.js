import { gql, useQuery } from "@apollo/client";
import Dishes from "./dishes";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

import AppContext from "./context";
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

function RestaurantList(props) {
  const { cart, setRestID, restID } = useContext(AppContext);
  const [restaurantID, setRestaurantID] = useState(restID);
  const [state, setState] = useState(cart);
  const router = useRouter();
  const GET_RESTAURANTS = gql`
    query {
      restaurants {
        data {
          id
          attributes {
            name
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_RESTAURANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  console.log(`Query Data: ${data.restaurants}`);

  let searchQuery = data.restaurants.data.filter((res) => {
    return res.attributes.name.toLowerCase().includes(props.search);
  });

  // definet renderer for Dishes
  const renderDishes = (restaurantID) => {
    return <Dishes restId={restaurantID}> </Dishes>;
  };

  const applyRestID = (ID, name) => {
    setRestID(ID, name);
    let path = name.split(" ").join("");

    router.push(`/restaurants/${path}`);
  };
  if (searchQuery.length > 0) {
    const restList = searchQuery.map((res) => (
      <Col key={res.id}>
        <Card
          style={{
            marginTop: "1em",
            minWidth: "15rem",
            height: "35em",
            maxheight: "35rem",
          }}
        >
          <CardTitle>
            <h3>{res.attributes.name}</h3>
          </CardTitle>
          <CardImg
            top={true}
            style={{ height: "auto" }}
            src={
              `https://foodiedb.battlegroundls.com` +
              res.attributes.image.data.attributes.url
            }
          />
          <CardBody style={{ overflow: "auto" }}>
            <CardText>
              <div style={{ position: "absolute", bottom: "30%" }}>
                {res.attributes.description}
              </div>
            </CardText>
          </CardBody>
          <div className="card-footer">
            <Button
              size="sm"
              color="info"
              onClick={() => applyRestID(res.id, res.attributes.name)}
            >
              {res.attributes.name}
            </Button>
          </div>
        </Card>
      </Col>
    ));

    return (
      <Container>
        <Row>{restList}</Row>

        {/* <Row sm="3">{renderDishes(restaurantID)}</Row> */}
      </Container>
    );
  } else {
    return <h1> No Restaurants Found</h1>;
  }
}
export default RestaurantList;
