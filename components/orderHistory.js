import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import AppContext from "../components/context";

function OrderHistory() {
  let { user, isAuthenticated } = useContext(AppContext);
  const GET_OLD_ORDERS = gql`
{
  orders (filters: {user: {eq: ${JSON.stringify(user.username)}}}){
    data {
      id
      attributes {
        dishes
        user
        amount
        charge_id
      }
    }
  }
}
  `;
  const { loading, error, data } = useQuery(GET_OLD_ORDERS, {});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR here</p>;
  if (!data) return <p>Not found</p>;
  console.log(data);

  let orders = data.orders.data;

  return (
    <>
      {orders.map((order) => (
        <div>
          {order.attributes.dishes.map((each) => (
            <>
              {each.name} x {each.quantity}
              <br />
            </>
          ))}
          Price: ${order.attributes.amount}
          <br/>
          Transaction ID: {order.attributes.charge_id}
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

export default OrderHistory;
