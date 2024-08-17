import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import CustomCard from "../common/CustomCard";

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
};

export default function Items({ id, title }: ItemsType) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: "item",
    },
  });
  return (
    <CustomCard
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      size="small"
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        "bg-tertiary shadow-md rounded-xl w-full border border-transparent hover:border-gray-100 cursor-pointer",
        isDragging && "opacity-30"
      )}
    >
      <p className="flex items-center justify-between">{title}</p>
    </CustomCard>
  );
}
