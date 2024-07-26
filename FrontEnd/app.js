import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./src/store/appStore";
import AppRouter from "./appRouter";
import "./globalStyles.css";
import './App.css'
function disableRightClick() {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    }, false);
  }
  disableRightClick();
const App = () => {
    return (
        <Provider store={appStore}>
            <AppRouter />
        </Provider>
    );
};

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(App());
