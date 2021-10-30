import React, { Component } from "react";
import Controls from "../components/Controls";
import { connect } from "react-redux";

import { incrementNum, decrementNum,resetNum} from "../actions/counterActions";

export class Controller extends Component {
constructor(props) {
  super(props);
}

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: (payload) => {
      dispatch(incrementNum(payload));
    },
    decrement: (payload) => {
      dispatch(decrementNum(payload));
    },
    reset:(payload)=>{
      dispatch(resetNum(payload));
    }
  };
};

export default connect(null, mapDispatchToProps)(Controls);
