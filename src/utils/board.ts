import { BoardSections, Task } from "../types/task";

export const initializeBoard = (tasks: Task[]) => {
  const boardSections: BoardSections = {
    container_1: [],
    container_2: tasks,
  };

  return boardSections;
};

export const findBoardSectionContainer = (
  boardSections: BoardSections,
  id: string
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id)
  );
  return container;
};
