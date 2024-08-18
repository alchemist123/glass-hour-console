import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Badge, Empty } from "antd";
import { BoardSectionProps } from "../../types/task";
import SortableTaskItem from "./SortableTaskItem";
import TaskItem from "./TaskItem";

export default function BoardSection({ id, title, tasks }: BoardSectionProps) {
  const { setNodeRef } = useDroppable({ id });

  const isContainer1 = title === "container_1";

  const totalHrs = tasks?.reduce((prev, curr) => prev + curr.activeTime, 0);

  function DragPrompt() {
    if (!isContainer1) return null;
    return (
      <div className="flex flex-col items-center p-5 justify-center w-full border border-dashed border-secondary rounded-lg bg-secondary bg-opacity-5">
        <p className="text-gray-500 text-base font-medium">Drag tasks here</p>
        <p className="text-gray-400 text-sm">Drop to add selected tasks</p>
      </div>
    );
  }

  function TaskList() {
    return (
      <>
        {tasks.map((task) => (
          <SortableTaskItem key={task.id} id={task.id}>
            <TaskItem task={task} />
          </SortableTaskItem>
        ))}
      </>
    );
  }

  function EmptyState() {
    return (
      <div className="h-full w-full my-10 flex justify-center items-center">
        <Empty />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 bg-secondary bg-opacity-5 p-5 rounded-lg">
      <div className="relative">
        <h1 className="text-secondary text-center font-medium text-lg pb-3">
          {isContainer1 ? "Assigned Tasks" : "Recorded Tasks"}
        </h1>
        {isContainer1 && (
          <Badge
            className="absolute right-0 top-0 !text-secondary"
            style={{ borderRadius: "5px" }}
            color="blue"
            count={`${totalHrs} hr`}
          />
        )}
      </div>
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className="flex flex-col gap-1">
          {tasks.length === 0 && !isContainer1 ? <EmptyState /> : TaskList()}
          <DragPrompt />
        </div>
      </SortableContext>
    </div>
  );
}
