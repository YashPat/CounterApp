import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };
  render() {
    return (
      <React.Fragment>
        <h3 className="m-2">Counter ID: {this.props.counter.id}</h3>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="m-2 btn btn-primary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
        <h2>
          <span className="badge badge-warning m-2">
            {this.props.counter.value}
          </span>
        </h2>
      </React.Fragment>
    );
  }
}

export default Counter;
