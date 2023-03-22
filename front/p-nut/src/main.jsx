import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./output.css";

import { Provider } from "react-redux";
import store from "./stores/index";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
