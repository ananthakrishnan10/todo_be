import express from 'express';
import todoRoutes from './modules/todos/todo.routes';

const app = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

export default app;
