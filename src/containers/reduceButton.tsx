import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import ReduceButton from "../components/reduceButton";
import {reduceTask} from "../actions/todo";

interface DispatchProps {
  onPress: () => void;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  onPress: () => dispatch(reduceTask()),
});

export default connect(null,mapDispatchToProps)(ReduceButton);