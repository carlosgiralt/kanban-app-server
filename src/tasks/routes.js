import { Router } from 'express';
import Task from './models/task.model';

const router = new Router();

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Creates a task
router.route('/').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;

  const newTask = new Task({ title, description, status });

  newTask.save()
    .then(() => res.json(newTask))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Find a task
router.route('/:id').get((req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

// Updates a task
router.route('/:id').put((req, res) => {
  const id = req.params.id;
  Task.findById(id)
    .then(task => {
      task.title = req.body.title || task.title;
      task.description = req.body.description;
      task.status = Number(req.body.status) || task.duration;

      task.save()
        .then(() => res.json(task))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});


export const TaskRouter = router;
