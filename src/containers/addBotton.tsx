import React, { FC, useState } from "react";

import AddButton from '../components/todoList/addBotton';

interface AddButtonContainerProps {
  addTask?: (title: string) => void;
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