import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TodoList from '../components/todoList';
import { Todo, deleteTask } from '../actions/todo';

interface StateProps {
  todos: Todo[],
};

const mapStateToProps = (state: Todo[]): StateProps => ({
  todos: state,
});

interface DispatchProps {
  deleteTask: (id: number) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  deleteTask: id => dispatch(deleteTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);