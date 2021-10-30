import React, { Component } from "react";
import PropTypes from "prop-types";
import AddBtn from "./AddBtn";
import DecBtn from "./DecBtn";
import ResetBtn from "./ResetBtn";

class Controls extends Component {
  render() {
    const {
      incrementLabel,
      decrementLabel,
      resetLabel,
      increment,
      decrement,
      reset,
      counterIndx,
      disabled,
   
    } = this.props;
    return (
      <div className="controls">
        <AddBtn
          incrementLabel={incrementLabel}
          disabled={disabled}
          increment={() => increment({ counterIndx })}
        />
        <DecBtn
          decrementLabel={decrementLabel}
          disabled={disabled}
          decrement={() => decrement({ counterIndx })}
        />
        <ResetBtn
          reset={() => reset({ counterIndx })}
          disabled={disabled}
          resetLabel={resetLabel}
        />
      </div>
    );
  }
}

Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func,
  disabled: PropTypes.bool,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  counterIndx: PropTypes.string,
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "reset",
};

export default Controls;
