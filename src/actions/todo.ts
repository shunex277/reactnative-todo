export enum TodoActionType {
  ADD = 'ADD',
};

export interface Todo {
  title: string;
  isDone: boolean;
};

export interface TodoAction {
  type: TodoActionType;
  todo?: Todo;
};

export const add = (todo: Todo): TodoAction => ({
  todo,
  type: TodoActionType.ADD
});