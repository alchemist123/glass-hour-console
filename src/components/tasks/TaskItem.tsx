import { Badge } from "antd";
import { Task } from "../../types/task";
import CustomCard from "../common/CustomCard";

type TaskItemProps = {
  task: Task;
};

export default function TaskItem({ task }: TaskItemProps) {
  return (
    <CustomCard size="small">
      <p>{task.title}</p>
      <div className="flex justify-between items-center">
        <p>{task.application}</p>
        <Badge showZero color="blue" count={`${task.activeTime} hr`} />
      </div>
    </CustomCard>
  );
}
