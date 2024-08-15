import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import usePickerStore from "../../store/pickerStore";
import {
  DateMap,
  useDateRangeDay,
  useDateRangeMonth,
  useDateRangeWeek,
} from "../../utils/useDateRange";
import CustomDatePicker from "../common/CustomDatePicker";
import CustomSelect from "../common/CustomSelect";

type PickerType = "week" | "month" | "date";

const options: { key: string; value: PickerType }[] = [
  { key: "Week", value: "week" },
  { key: "Month", value: "month" },
];

export default function PickerHeader() {
  const { date_string, update_date_string, update_date_array } = usePickerStore(
    (state) => state
  );
  const [type, setType] = useState<PickerType>("week");

  const dateRanges: {
    date: DateMap[];
    week: DateMap[];
    month: DateMap[];
  } = {
    date: useDateRangeDay(date_string).dateOfDay,
    week: useDateRangeWeek(date_string).datesOfWeek,
    month: useDateRangeMonth(date_string).datesOfMonth,
  };

  useEffect(() => {
    if (date_string) {
      update_date_array(dateRanges[type]);
    }
  }, [date_string, type]);

  return (
    <>
      <CustomSelect
        className="w-40 h-10"
        value={type}
        onChange={(value) => setType(value as PickerType)}
        options={options}
      />
      <CustomDatePicker
        className="w-60 h-10"
        type={type}
        onChange={(value: Dayjs) => update_date_string(value)}
      />
    </>
  );
}
