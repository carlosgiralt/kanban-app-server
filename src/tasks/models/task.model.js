import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskModel = {
  title: { type: String, required: true },
  description: { type: String },
  status: { type: Number, required: true, default: 1}
};

const schema = new Schema(TaskModel, { timestamps: true });

const Task = mongoose.model("Task", schema);

export default Task;
