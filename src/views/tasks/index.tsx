import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import ListTask from "../../components/tasks/ListTask";
import TaskHeader from "../../components/tasks/TaskHeader";

export default function Index() {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  console.log("selectedDate", selectedDate);

  function handleSelectChange(date: Dayjs) {
    setSelectedDate(date);
  }

  return (
    <div className="p-5 w-full h-full overflow-auto">
      <TaskHeader onChange={handleSelectChange} />
      <div className="mt-5">
        <ListTask />
      </div>
    </div>
  );
}
