import React from "react";
import PropTypes from "prop-types";

const DecBtn = ({ decrementLabel, decrement, disabled }) => {
  return (
    <button
      className={`decBtn ${disabled ? "disabled" : ""}`}
      disabled={disabled}
      data-testid="dec-btn-testid"
      onClick={() => {
        decrement();
      }}
    >
      <span>{decrementLabel}</span>
    </button>
  );
};

DecBtn.propTypes = {
  decrement: PropTypes.func,
  decrementLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

DecBtn.defaultProps = {
  DecBtn: "-",
};

export default DecBtn;
