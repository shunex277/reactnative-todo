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
      const newStateDeleted = state.filter((value, index) => index !== action.id);
      return newStateDeleted;
    case TodoActionType.UPDATE:
      if ((!!action.id || action.id === 0) && !!action.todo) {
        let newStateUpdated = [...state];
        newStateUpdated.splice(action.id, 1, action.todo);
        return newStateUpdated;
      } else {
        return state;
      }
    case TodoActionType.REDUCE:
      const reducedTaskIndex = Math.floor(Math.random() * state.length)
      let newStateReduced = state.filter(((value, index) => index !== reducedTaskIndex));
      return newStateReduced;
    default: {
      const _: never = action.type;

      return state;
    }
  }
}

export default todoReducer;