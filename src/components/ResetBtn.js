import React from "react";
import PropTypes from "prop-types";

const ResetBtn = ({ resetLabel, reset, disabled }) => {
  return (
    <button
      className={`resetBtn ${disabled ? "disabled" : ""}`}
      data-testid="reset-btn-testid"
      disabled={disabled}
      onClick={() => {
        reset();
      }}
    >
      <span>{resetLabel}</span>
    </button>
  );
};

ResetBtn.propTypes = {
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

ResetBtn.defaultProps = {
  ResetBtn: "+",
};

export default ResetBtn;
