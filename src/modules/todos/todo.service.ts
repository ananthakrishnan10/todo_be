import { TodoModel } from './todo.model';
import { Todo } from './todo.types';

export const getAllTodos = async (): Promise<Todo[]> => {
  return await TodoModel.find().lean();
};

export const getTodoById = async (id: string): Promise<Todo | null> => {
  return await TodoModel.findById(id).lean();
};

export const createTodo = async (data: Pick<Todo, 'title'>): Promise<Todo> => {
  const todo = new TodoModel({ title: data.title });
  await todo.save();
  return todo.toObject();
};

export const updateTodo = async (id: string, updates: Partial<Todo>): Promise<Todo | null> => {
  const updated = await TodoModel.findByIdAndUpdate(id, updates, {
    new: true,
  }).lean();
  return updated;
};

export const deleteTodo = async (id: string): Promise<Todo | null> => {
  return await TodoModel.findByIdAndDelete(id).lean();
};
