import React, { FC, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch} from 'redux';

import AddButton from '../components/todoList/addBotton';
import { add, Todo } from '../actions/todo';

interface AddButtonContainerProps {
  addTask: (todo: Todo) => void;
};

interface DispatcheProps {
  addTask: (todo: Todo) => void;
};

const mapDispatchToProps = (dispatch: Dispatch): DispatcheProps => ({
  addTask: todo => dispatch(add(todo)),
})

const AddButtonContainer: FC<AddButtonContainerProps> = ({
  addTask = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  };

  const [addingTitle, setAddingTitle] = useState('');

  const addTaskMethod = () => {
    addTask({title: addingTitle, isDone: false});
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

export default connect(null, mapDispatchToProps)(AddButtonContainer);