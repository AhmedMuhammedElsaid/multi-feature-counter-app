import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "./containers/Controls";
import Counter from "./containers/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.incrementRef = createRef();
    this.decrementRef = createRef();
  }
  render() {
    const { increment, decrement } = this.props;
    // control the change of the slider to affects our counter based on the scenario given
    const handleChange = (event) => {
      const newValue = +event.target.value || 1;
      this.setState({ value: newValue });
      increment({
        counterIndx: "counterOne",
        payload: newValue,
      });
      decrement({
        counterIndx: "counterTwo",
        payload: newValue,
      });
    };

    // increase our left counter by 2 every single two seconds

    const handleIncrementToggle = (event) => {
      const { checked } = event.target;
      if (checked) {
        this.incrementRef.current = setInterval(
          () => increment({ counterIndx: "counterOne", payload: 2 }),
          1000
        );
      } else clearInterval(this.incrementRef.current);
    };
    // decrement our left counter by 2 every single two seconds
    const handleDecrementToggle = (event) => {
      const { checked } = event.target;
      if (checked) {
        this.decrementRef.current = setInterval(
          () => decrement({ counterIndx: "counterOne", payload: 2 }),
          1000
        );
      } else clearInterval(this.decrementRef.current);
    };
    return (
      <div className="container">
        <div className="slider-holder">
          <input
            type="range"
            min="1"
            max="100"
            data-testid="slider-testid"
            onChange={handleChange}
            value={this.state.value}
          />
          <p>
            Current Value of the slider is <strong>{this.state.value}</strong>
          </p>
          <div className="toggles-holder">
            <div>
              <p>increment toggle</p>
              <label className="switch">
                <input type="checkbox" onChange={handleIncrementToggle} />
                <span className="slider round"></span>
              </label>
            </div>
            <div>
              <p>decrement toggle</p>
              <label className="switch">
                <input type="checkbox" onChange={handleDecrementToggle} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="counters-holder">
          <Counter counterIndx={"counterOne"} />
          <Counter counterIndx={"counterTwo"} disabled={true} />
        </div>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(App);
