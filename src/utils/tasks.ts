import { Task } from "../types/task";

export const getTaskById = (tasks: Task[], id: string) => {
  return tasks.find((task) => task.id === id);
};
