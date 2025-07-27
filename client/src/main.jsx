// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Controllers/Reducers/authSlice.js";
import bugReducer from "./Controllers/Reducers/bugSlice.js";

const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
});

const store = configureStore({
  reducer,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
