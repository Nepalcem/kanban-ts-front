import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { GlobalStyle } from "components/globalStyle";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <GlobalStyle />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
