import React, { Component } from "react";
import Nav from "./nav";
import Counters from "./counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 1 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("delete: ", counterId);

    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleInc = counter => {
    // const counters = [...this.state.counters];
    // const index = counters.indexOf(counter);
    // counters[index] = { ...counter };
    // counters[index].value++;
    // this.setState({ counters });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <Nav
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onInc={this.handleInc}
            onDel={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
