import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useState, useContext } from "react";
import AppContext from "./context";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
function Dishes(props) {
  //const [restaurantID, setRestaurantID] = useState();

  const { addItem, restID } = useContext(AppContext);

  const GET_RESTAURANT_DISHES = gql`
    query Dishes($ID: ID!) {
      restaurant(id: $ID) {
        data {
          id
          attributes {
            name
            dishes {
              data {
                attributes {
                  name
                  description
                  price
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
        }
      }
    }
  `;

  const router = useRouter();

  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { ID: restID.ID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here {error}</p>;
  if (!data) return <p>Not found</p>;

  let restaurant = data.restaurant.data;

  let searchQuery = restaurant.attributes.dishes.data.filter((res) => {
    return res.attributes.name.toLowerCase().includes(props.search);
  });

  if (restID.ID > 0) {
    return (
      <>
        {props.search.length > 1
          ? searchQuery.map((res) => (
              <Col skey={res.id}>
                <Card
                  style={{ margin: "1.2rem", height: "35rem", width: "auto" }}
                >
                  <CardImg
                    top={true}
                    style={{ height: "auto" }}
                    src={
                      res.attributes.image.data != null
                        ? `https://foodiedb.battlegroundls.com${res.attributes.image.data.attributes.url}`
                        : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                    }
                  />
                  <CardBody>
                    <CardTitle>
                      <h3>{res.attributes.name}</h3>
                    </CardTitle>
                    <CardText>
                      {res.attributes.description}
                      <br />
                      <br />
                      <h4>${(res.attributes.price / 100).toFixed(2)}</h4>
                    </CardText>
                  </CardBody>

                  <Button
                    color="info"
                    outline
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(res.attributes);
                    }}
                  >
                    + Add To Cart
                  </Button>
                </Card>
              </Col>
            ))
          : restaurant.attributes.dishes.data.map((res) => (
              <Col key={res.id}>
                <Card
                  style={{ margin:"0.5rem",height: "35rem", width: "20rem", padding: "1.5rem" }}
                >
                  <CardImg
                    top={true}
                    style={{ height: "auto" }}
                    src={
                      res.attributes.image.data != null
                        ? `https://foodiedb.battlegroundls.com${res.attributes.image.data.attributes.url}`
                        : `https://bitsofco.de/content/images/2018/12/broken-1.png`
                    }
                  />
                  <CardBody>
                    <CardTitle>
                      <h5>{res.attributes.name}</h5>
                    </CardTitle>
                    {res.attributes.description ? (
                      <CardText>
                        <p style={{ overflow: "scroll" }}>
                          {res.attributes.description}
                        </p>
                      </CardText>
                    ) : (
                      ""
                    )}

                    <h4>${(res.attributes.price / 100).toFixed(2)}</h4>
                  </CardBody>
                  <Button
                    className="card-footer"
                    color="info"
                    outline
                    onClick={(e) => {
                      e.preventDefault();
                      addItem(res.attributes);
                    }}
                  >
                    + Add To Cart
                  </Button>
                </Card>
              </Col>
            ))}
      </>
    );
  } else {
    return <h1> No dishes at this restaurant yet</h1>;
  }
}
export default Dishes;
