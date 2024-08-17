import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import Container from "./Container";
import Items from "./Item";
import { sampleTask } from "./sampleTask";

type DNDType = {
  id: UniqueIdentifier;
  title: string;
  items: {
    id: UniqueIdentifier;
    title: string;
  }[];
};

export default function ListTask() {
  const [containers, setContainers] = useState<DNDType[]>([
    {
      id: "container_1",
      title: "container_1",
      items: [],
    },
    {
      id: "container_2",
      title: "container_2",
      items: sampleTask,
    },
  ]);

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  // Helper functions
  const findValueOfItems = (id: UniqueIdentifier | undefined, type: string) => {
    if (type === "container") {
      return containers.find((item) => item.id === id);
    }
    if (type === "item") {
      return containers.find((container) =>
        container.items.find((item) => item.id === id)
      );
    }
  };

  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "item");
    if (!container) return "";
    const item = container.items.find((item) => item.id === id);
    return item ? item.title : "";
  };

  const findContainerTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    return container ? container.title : "";
  };

  const findContainerItems = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, "container");
    return container ? container.items : [];
  };

  // DND Handlers
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id);
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) return;

    const activeType = active.id.toString().includes("item")
      ? "item"
      : "container";
    const overType = over.id.toString().includes("item") ? "item" : "container";

    if (activeType === "item" && overType === "item") {
      handleItemMove(active, over);
    } else if (activeType === "item" && overType === "container") {
      handleItemDropToContainer(active, over);
    }
  };

  const handleItemMove = (
    active: DragStartEvent["active"],
    over: DragMoveEvent["over"]
  ) => {
    const activeContainer = findValueOfItems(active.id, "item");
    const overContainer = findValueOfItems(over?.id, "item");

    if (!activeContainer || !overContainer) return;

    const activeContainerIndex = containers.findIndex(
      (container) => container.id === activeContainer.id
    );
    const overContainerIndex = containers.findIndex(
      (container) => container.id === overContainer.id
    );

    const activeItemIndex = activeContainer.items.findIndex(
      (item) => item.id === active.id
    );
    const overItemIndex = overContainer.items.findIndex(
      (item) => item.id === over?.id
    );

    let newItems = [...containers];
    if (activeContainerIndex === overContainerIndex) {
      newItems[activeContainerIndex].items = arrayMove(
        newItems[activeContainerIndex].items,
        activeItemIndex,
        overItemIndex
      );
    } else {
      const [removedItem] = newItems[activeContainerIndex].items.splice(
        activeItemIndex,
        1
      );
      newItems[overContainerIndex].items.splice(overItemIndex, 0, removedItem);
    }
    setContainers(newItems);
  };

  const handleItemDropToContainer = (
    active: DragStartEvent["active"],
    over: DragMoveEvent["over"]
  ) => {
    const activeContainer = findValueOfItems(active.id, "item");
    const overContainer = findValueOfItems(over?.id, "container");

    if (!activeContainer || !overContainer) return;

    const activeContainerIndex = containers.findIndex(
      (container) => container.id === activeContainer.id
    );
    const overContainerIndex = containers.findIndex(
      (container) => container.id === overContainer.id
    );

    const activeItemIndex = activeContainer.items.findIndex(
      (item) => item.id === active.id
    );

    let newItems = [...containers];
    const [removedItem] = newItems[activeContainerIndex].items.splice(
      activeItemIndex,
      1
    );
    newItems[overContainerIndex].items.push(removedItem);
    setContainers(newItems);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over || active.id === over.id) return;

    const activeType = active.id.toString().includes("item")
      ? "item"
      : "container";
    const overType = over.id.toString().includes("item") ? "item" : "container";

    if (activeType === "container" && overType === "container") {
      handleContainerMove(active, over);
    } else if (activeType === "item" && overType === "item") {
      handleItemMove(active, over);
    } else if (activeType === "item" && overType === "container") {
      handleItemDropToContainer(active, over);
    }
    setActiveId(null);
  };

  const handleContainerMove = (
    active: DragStartEvent["active"],
    over: DragMoveEvent["over"]
  ) => {
    const activeContainerIndex = containers.findIndex(
      (container) => container.id === active.id
    );
    const overContainerIndex = over
      ? containers.findIndex((container) => container.id === over.id)
      : -1;

    let newItems = arrayMove(
      containers,
      activeContainerIndex,
      overContainerIndex
    );
    setContainers(newItems);
  };

  return (
    <div className="grid grid-cols-2 gap-5">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={containers.map((container) => container.id)}>
          {containers.map((container) => (
            <Container id={container.id} key={container.id}>
              <SortableContext items={container.items.map((item) => item.id)}>
                <div className="flex items-start flex-col gap-y-4">
                  {container.items.map((item) => (
                    <Items title={item.title} id={item.id} key={item.id} />
                  ))}
                </div>
              </SortableContext>
            </Container>
          ))}
        </SortableContext>
        <DragOverlay adjustScale={false}>
          {activeId && activeId.toString().includes("item") && (
            <Items id={activeId} title={findItemTitle(activeId)} />
          )}
          {activeId && activeId.toString().includes("container") && (
            <Container id={activeId} title={findContainerTitle(activeId)}>
              {findContainerItems(activeId).map((item) => (
                <Items key={item.id} title={item.title} id={item.id} />
              ))}
            </Container>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
