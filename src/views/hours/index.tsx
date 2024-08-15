import TimelineCard from "../../components/hour/HourCard";
import PickerHeader from "../../components/hour/PickerHeader";
import usePickerStore from "../../store/pickerStore";
import { daysOfWeek } from "../../utils/daysOfWeek";

export default function Index() {
  const dateArray = usePickerStore((state) => state.date_array);

  console.log("dateArray", dateArray);

  const renderTableHeader = () => (
    <thead className="sticky top-0  bg-tertiary z-10">
      <tr>
        {daysOfWeek.map((day) => (
          <th
            key={day}
            className="text-secondary sticky top-0 bg-tertiary z-10 font-medium py-2 min-w-40 border border-gray-300 text-opacity-50"
          >
            {day}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderTableBody = () => (
    <tbody>
      {dateArray.map((record, index) => (
        <tr key={index}>
          {daysOfWeek.map((day) => (
            <td key={day} className="min-w-40 border border-gray-300">
              <TimelineCard data={{ [day]: record[day] }} />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="h-screen flex flex-col gap-5 p-5">
      <div className="flex items-center justify-end gap-5 sticky top-0 left-0 w-full bg-tertiary z-10">
        <PickerHeader />
      </div>
      <div className="h-screen overflow-auto">
        <table className="h-full w-full table-fixed relative border-separate border-spacing-0">
          {renderTableHeader()}
          {renderTableBody()}
        </table>
      </div>
    </div>
  );
}
