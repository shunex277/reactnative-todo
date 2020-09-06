import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TodoList from '../components/todoList';
import { Todo, deleteTask, updateTask } from '../actions/todo';

interface StateProps {
  todos: Todo[],
};

const mapStateToProps = (state: Todo[]): StateProps => ({
  todos: state,
});

interface DispatchProps {
  deleteTask: (id: number) => void;
  updateTask: (id: number, todo: Todo) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  deleteTask: id => dispatch(deleteTask(id)),
  updateTask: (id, todo) => dispatch(updateTask(id, todo)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);