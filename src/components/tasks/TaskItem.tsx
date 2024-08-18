import { Task } from "../../types/task";
import CustomCard from "../common/CustomCard";

type TaskItemProps = {
  task: Task;
};

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <CustomCard size="small">
      <p>{task.title}</p>
      <p>{task.application}</p>
      <p>{task.activeTime}</p>
    </CustomCard>
  );
};

export default TaskItem;
