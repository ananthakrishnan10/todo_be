import { Request, Response } from 'express';
import * as todoService from './todo.service';

export const getTodos = async (req: Request, res: Response) => {
  const todos = await todoService.getAllTodos();
  res.json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
  const todo = await todoService.getTodoById(req.params.id);
  if (!todo) return res.status(404).json({ message: 'Todo not found' });
  res.json(todo);
};

export const createTodo = async (req: Request, res: Response) => {
  const newTodo = await todoService.createTodo({ title: req.body.title });
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const updated = await todoService.updateTodo(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Todo not found' });
  res.json(updated);
};

export const deleteTodo = async (req: Request, res: Response) => {
  const deleted = await todoService.deleteTodo(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Todo not found' });
  res.json({ message: 'Todo deleted successfully' });
};
