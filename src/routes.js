import app from './app';
import { TaskRouter } from './tasks/routes';

app.route('/ping').get((req, res) =>
  res.json({
    message: "PONG"
  })
);

app.use('/tasks', TaskRouter);
