import {Reducer} from 'redux';
import { TodoActionType, TodoAction, Todo } from './actions/todo';

const debug = true

export const initialState: Todo[] = debug ? [{title: "これはサンプルです", isDone: false}] : [];

const todoReducer: Reducer<Todo[], TodoAction> = (
  state: Todo[] = initialState,
  action: TodoAction,
): Todo[] => {
  switch(action.type) {
    case TodoActionType.ADD:
      return state.concat((action.todo || {title: 'undifined', isDone: false}));
    case TodoActionType.DELETE:
      const newState = state.filter((value, index) => index !== action.id);
      return newState;
    default: {
      const _: never = action.type;

      return state;
    }
  }
}

export default todoReducer;