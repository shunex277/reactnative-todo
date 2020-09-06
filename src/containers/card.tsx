import React, { FC, useState } from "react";

import Card from "../components/todoList/card";
import { Todo, } from '../actions/todo';

export interface Props {
  id: number;
  title: string;
  isDone: boolean;
  deleteTask: (id: number) => void;
  updateTask: (id: number, todo: Todo) => void;
}

const CardContainer: FC<Props> = ({ id, title, isDone, deleteTask, updateTask, }) => {
  const deleteTaskMethod = () => {
    deleteTask(id);
  };

  const toggleIsDone = () => {
    const newTask: Todo = {title: title, isDone: !isDone};
    updateTask(id, newTask);
  };

  return (
    <>
      <Card title={title} isDone={isDone} deleteTask={deleteTaskMethod} toggleIsDone={toggleIsDone} />
    </>
  );
};

export default CardContainer;
