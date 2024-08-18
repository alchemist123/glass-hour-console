export type Status = "backlog" | "in progress" | "done";

export type Task = {
  id: string;
  title: string;
  platform: string;
  application: string;
  task: string | null;
  activeTime: number;
  lastActiveTime: string;
  runningStatus: string;
};

export type BoardSections = {
  [name: string]: Task[];
};

export type BoardSectionProps = {
  id: string;
  title: string;
  tasks: Task[];
};
