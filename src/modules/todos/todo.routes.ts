import { Router } from 'express';
import * as todoController from './todo.controller';
import { validate } from '../../middlewares/validate';
import { createTodoSchema, updateTodoSchema } from './todo.schema';

const router = Router();

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', validate(createTodoSchema), todoController.createTodo);
router.put('/:id', validate(updateTodoSchema), todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
