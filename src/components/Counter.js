import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";

class Counter extends Component {
  render() {
    const { counters, counterIndx, disabled } = this.props;
    return (
      <div className="counter">
        <div data-testid="count-value-testid">{counters[counterIndx]}</div>
        <Controls
          counterIndx={counterIndx}
          disabled={disabled}
        />
      </div>
    );
  }
}

Counter.propTypes = {
  counters: PropTypes.object,
  disabled: PropTypes.bool,
  counterIndx: PropTypes.string,
};

export default Counter;
