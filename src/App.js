import React from "react";
import "./App.css";
import Form from "./components/Form/index";
import Button from "./components/Button/index";
import Header from "./components/Header/index";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Form">
        <Form />
      </div>
      <div className="button">
        <Button />
      </div>
    </div>
  );
}

export default App;
