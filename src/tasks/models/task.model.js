import mongoose, { Schema } from "mongoose";

const TaskModel = {
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: Number, required: true }
};

const Task = mongoose.model(
  'Task',
  new Schema(TaskModel, { timestamps: true })
);

export default Task;
