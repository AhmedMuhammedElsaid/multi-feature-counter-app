import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";

export class Controller extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Controls {...this.props} />;
  }
}

export const mapStateToProps = (store) => {
  return {
    counters: store.counters,
  };
};

export default connect(mapStateToProps, null)(Controls);
