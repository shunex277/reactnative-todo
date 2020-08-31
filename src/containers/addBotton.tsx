import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch} from 'redux';

import AddButton from '../components/todoList/addBotton';
import { add, Todo } from '../actions/todo';

interface AddButtonContainerProps {
  addTask?: (title: string) => void;
}

interface DispatcheProps {
  addTask: (todo: Todo) => void;
}

const AddButtonContainer: FC<AddButtonContainerProps> = ({
  addTask = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  };

  const [addingTitle, setAddingTitle] = useState('');

  const addTaskMethod = () => {
    addTask(addingTitle);
    toggleVisible();
  }

  return (
    <>
      <AddButton
        isVisibleOvarlay={isVisible}
        onPress={toggleVisible} 
        onChangeText={(value) => {setAddingTitle(value)}}
        addTask={addTaskMethod}
      />
    </>
  )
}

export default AddButtonContainer;