import React from "react";
import PropTypes from "prop-types";

const AddBtn = ({ incrementLabel, increment, disabled }) => {
  return (
    <button
    data-testid="add-btn-testid"
      className={`addBtn ${disabled ? "disabled" : ""}`}
      onClick={() => {
        increment();
      }}
      disabled={disabled}
    >
      <span>{incrementLabel}</span>
    </button>
  );
};

AddBtn.propTypes = {
  increment: PropTypes.func,
  incrementLabel: PropTypes.string,
  disabled: PropTypes.bool,
};

AddBtn.defaultProps = {
  AddBtn: "+",
};

export default AddBtn;
