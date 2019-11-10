import React, { Component } from "react";
import "./styles.css";

export default class Form extends Component {
  render() {
    return (
      <form>
        <div className="formu">
          <div className="nome">
            <label>
              Nome:
              <input type="text" name="name" className="name" />
            </label>
          </div>
          <div className="acomp">
            <label>
              Acomp:
              <input type="text" name="dep" className="dep" />
            </label>
          </div>
        </div>
      </form>
    );
  }
}
