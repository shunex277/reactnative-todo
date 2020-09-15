export enum TodoActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  REDUCE = 'REDUCE',
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
});

export const updateTask = (id: number, todo: Todo): TodoAction => ({
  id,
  todo,
  type: TodoActionType.UPDATE
});

export const reduceTask = (): TodoAction => ({
  type: TodoActionType.REDUCE
})