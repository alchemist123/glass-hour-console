import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import TimelineBadge from "./TimelineBadge";

dayjs.extend(isToday);

interface HourCardCardProps {
  data: { [x: string]: string | null };
}

const sampleData = [
  {
    id: 1,
    taskName: "Design Homepage",
    description: "Create and finalize the design for the homepage.",
    startTime: "2024-08-01T09:00:00",
    endTime: "2024-08-01T11:00:00",
    duration: "2h 0m",
    date: "2024-08-30",
  },
  {
    id: 2,
    taskName: "Develop API",
    description: "Build and test the RESTful API endpoints.",
    startTime: "2024-08-01T11:30:00",
    endTime: "2024-08-01T14:00:00",
    duration: "2h 30m",
    date: "2024-08-11",
  },
  {
    id: 3,
    taskName: "Write Documentation",
    description: "Write and review the API documentation.",
    startTime: "2024-08-02T09:00:00",
    endTime: "2024-08-02T12:00:00",
    duration: "3h 0m",
    date: "2024-08-11",
  },
];

export default function HourCard({ data }: HourCardCardProps) {
  return Object.entries(data)?.map(([_, value], index) => {
    if (!value) {
      return <div key={index} className="flex flex-col min-h-80"></div>;
    }

    const isTodayTask = dayjs(value).isToday();

    return (
      <div
        key={index}
        className={`flex flex-col h-full ${
          isTodayTask ? "bg-blue-50 bg-opacity-50" : "bg-red-50 bg-opacity-50"
        } min-h-80`}
      >
        <div className="p-2">
          <div className="flex justify-between items-center">
            <p className="font-medium text-primary text-left opacity-50">
              {dayjs(value).date()}
            </p>
            <p className="font-medium text-primary text-right opacity-50">
              7hr
            </p>
          </div>
          {sampleData.map((task) =>
            task.date === value ? (
              <TimelineBadge
                key={task.id}
                text={task.description}
                className="my-2 pt-5 !z-0"
                hour={task.duration}
              />
            ) : null
          )}
        </div>
      </div>
    );
  });
}
