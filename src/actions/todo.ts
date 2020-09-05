export enum TodoActionType {
  ADD = 'ADD',
  DELETE = 'DELETE'
};

export interface Todo {
  title: string;
  isDone: boolean;
};

export interface TodoAction {
  type: TodoActionType;
  todo?: Todo;
  id?: number;
};

export const add = (todo: Todo): TodoAction => ({
  todo,
  type: TodoActionType.ADD
});

export const deleteTask = (id: number): TodoAction => ({
  id,
  type: TodoActionType.DELETE
})