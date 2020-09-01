import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TodoList from '../components/todoList';
import { Todo } from '../actions/todo';

interface StateProps {
  todos: Todo[],
};

const mapStateToProps = (state: Todo[]): StateProps => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);