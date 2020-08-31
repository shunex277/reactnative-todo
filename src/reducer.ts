import {Reducer} from 'redux';
import { TodoActionType, TodoAction, Todo } from './actions/todo';

export const initialState: Todo[] = [];

const todoReducer: Reducer<Todo[], TodoAction> = (
  state: Todo[] = initialState,
  action: TodoAction,
): Todo[] => {
  switch(action.type) {
    case TodoActionType.ADD:
      return state.concat((action.todo || {title: 'undifined', isDone: false}));
    default: {
      const _: never = action.type;

      return state;
    }
  }
}

export default todoReducer;