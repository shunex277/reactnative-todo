import React, { FC, useState } from "react";

import Card from "../components/todoList/card";

export interface Props {
  id: number;
  title: string;
  isDone: boolean;
  deleteTask: (id: number) => void;
}

const CardContainer: FC<Props> = ({ id, title, isDone, deleteTask, }) => {
  const deleteTaskMethod = () => {
    deleteTask(id)
  }
  return (
    <>
      <Card title={title} isDone={isDone} deleteTask={deleteTaskMethod}/>
    </>
  );
};

export default CardContainer;
