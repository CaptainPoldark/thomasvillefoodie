import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";

import Link from "next/link";
import AppContext from "./context";


function Cart() {
  let { cart, addItem, removeItem, isAuthenticated } = useContext(AppContext);
  //console.log(JSON.stringify(cart));
  //const [cartA, setCartA] = useState({cart})
  //cart = value.cart;
  //console.log('props:'+ JSON.stringify(value));

  //console.log(`in CART: ${JSON.stringify(cart)}`);

  //   problem is that cart may not be set
  const router = useRouter();
  //console.log(`Router Path: ${JSON.stringify(router)}`);

  const renderItems = () => {
    let { items } = cart;
    console.log(`items: ${JSON.stringify(items)}`);
    if (cart.items.length > 0) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{ marginBottom: 15 }}
              key={item.name}
            >
              <div>
                <span id="item-price">&nbsp; ${item.price / 100}</span>
                <span id="item-name">&nbsp; {item.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 5,
                    marginLeft: 10,
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    padding: 0,
                    width: 15,
                    marginRight: 10,
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      });
      return itemList;
    } else {
      return <div></div>;
    }
  };

  const checkoutItems = () => {
    return (
      <div>
        <Badge
          bg="success"
          style={{ width: "100%", padding: 10, marginBottom: "1rem" }}
          color="success"
        >
          <h5 style={{ fontWeight: 100 }}>Total:</h5>
          <h3>${cart.total / 100}</h3>
          {console.log("TOTAL")}
          {console.log(cart.total)}
        </Badge>
        <Badge bg="secondary">
          <div>Tax ${(cart.tax / 100).toFixed(2)}</div>
          <div>Service fee ${(cart.fee / 100).toFixed(2)}</div>
        </Badge>
        <br/>

        {isAuthenticated ? (
          <Link href="/checkout/">
            <Button style={{ width: "50%" }} color="primary">
              <a>
                <h4>Order</h4>
              </a>
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button style={{ width: "100%" }} color="primary">
              <a>
                <p>Login to place your order</p>
              </a>
            </Button>
          </Link>
        )}
      </div>
    );
  };

  // return Cart
  return (
    <div>
      <h1> Cart</h1>
      <Card  >
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody >
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          {cart.items ? (
            <div>
              <div>{renderItems()}</div>
              <div></div>
              <div>{checkoutItems()}</div>
            </div>
          ) : (
            <h3>Start adding items to your cart</h3>
          )}

          {console.log(`Router Path: ${router.asPath}`)}
        </CardBody>
      </Card>
      <style jsx>{`
        #item-price {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
        #item-quantity {
          font-size: 0.95em;
          padding-bottom: 4px;
          color: rgba(158, 158, 158, 1);
        }
        #item-name {
          font-size: 1.3em;
          color: rgba(97, 97, 97, 1);
        }
      `}</style>
    </div>
  );
}
export default Cart;
