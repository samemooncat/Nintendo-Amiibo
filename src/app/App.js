import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "../store/index";
import Header from "../components/header/index"
import Main from "../screens/main/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
