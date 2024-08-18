import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { BoardSectionProps } from "../../types/task";
import SortableTaskItem from "./SortableTaskItem";
import TaskItem from "./TaskItem";

export default function BoardSection({ id, title, tasks }: BoardSectionProps) {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div className="flex flex-col gap-2 bg-secondary bg-opacity-5 p-5 rounded-lg">
      <h1 className="text-secondary text-center font-medium text-lg pb-3">
        {title === "container_1" ? "Assigned Tasks" : "Recorded Tasks"}
      </h1>
      <SortableContext
        id={id}
        items={tasks}
        strategy={verticalListSortingStrategy}
      >
        <div ref={setNodeRef} className="flex flex-col gap-1">
          {tasks.map((task) => (
            <div key={task.id}>
              <SortableTaskItem id={task.id}>
                <TaskItem task={task} />
              </SortableTaskItem>
            </div>
          ))}
          {title === "container_1" && (
            <div className="flex flex-col items-center p-5 justify-center w-full border border-dashed border-secondary rounded-lg bg-secondary bg-opacity-5">
              <p className="text-gray-500 text-base font-medium">
                Drag tasks here
              </p>
              <p className="text-gray-400 text-sm">
                Drop to add selected tasks
              </p>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}
