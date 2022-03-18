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
function Dishes() {
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

  if (restID.ID > 0) {
    return (
      <>
        {restaurant.attributes.dishes.data.map((res) => (
          <Col xs="6" sm="4" style={{ padding: 0 }} key={res.id}>
            <Card style={{ margin: "1.2em", height: "auto" }}>
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
                  <h4>${res.attributes.price / 100}</h4>
                </CardText>
              </CardBody>
              <div className="card-footer">
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
              </div>
            </Card>
          </Col>
        ))}
      </>
    );
  } else {
    return <h1> No Dishes</h1>;
  }
}
export default Dishes;
