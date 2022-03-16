/* /context/AppContext.js */

import { CardNumberElement } from "@stripe/react-stripe-js";
import React from "react";
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({
  isAuthenticated: false,
  cart: { items: [], total: 0 },
  addItem: () => {},
  removeItem: () => {},
  user: {
    id: Number,
    username: String,
    email: String,
    provider: String,
    confirmed: Boolean,
    blocked: Boolean,
    createdAt: String,
    updatedAt: String,
  },
  setUser: () => {},
});

export default AppContext;
