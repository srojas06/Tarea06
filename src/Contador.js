import React, { Component } from "react";

export default class Contador extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  Incrementar() {
    this.setState({
      count: this.state.count + 1
    });
  }

  Disminuir() {
    this.setState({
      count: this.state.count - 1
    });
  }
  Reiniciar() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <h1>Contador :{this.state.count}</h1>
        <button className="inc" onClick={(e) => this.Incrementar(e)}>
          Boton de Incrementar +
        </button>
        <button className="dec" onClick={(e) => this.Disminuir(e)}>
          Boton de disminuir -
        </button>
        <button className="rei" onClick={(e) => this.Reiniciar(e)}>
          Reinicia el contador :)
        </button>
      </div>
    );
  }
}
