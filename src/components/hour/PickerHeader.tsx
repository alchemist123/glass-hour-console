import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import usePickerStore from "../../store/pickerStore";
import {
  useDateRangeDay,
  useDateRangeMonth,
  useDateRangeWeek,
} from "../../utils/useDateRange";
import CustomDatePicker from "../common/CustomDatePicker";
import CustomSelect from "../common/CustomSelect";

type PickerType = "week" | "month" | "date" | "year" | "quarter";

const options: { key: string; value: PickerType }[] = [
  // {
  //   key: "Day",
  //   value: "date",
  // },
  {
    key: "Week",
    value: "week",
  },
  {
    key: "Month",
    value: "month",
  },
];

export default function PickerHeader() {
  const { date_string, update_date_string, update_date_array } = usePickerStore(
    (state) => state
  );

  const [type, setType] = useState<PickerType>("week");

  function getDateArray(value: Dayjs) {
    if (type === "date") {
      const { dateOfDay } = useDateRangeDay(value);
      update_date_array(dateOfDay);
    } else if (type === "week") {
      const { datesOfWeek } = useDateRangeWeek(value);
      update_date_array(datesOfWeek);
    } else {
      const { datesOfMonth } = useDateRangeMonth(value);
      update_date_array(datesOfMonth);
    }
  }

  function handleDateChange(value: Dayjs) {
    update_date_string(value);
  }

  useEffect(() => {
    if (date_string) {
      getDateArray(date_string);
    }
  }, [date_string, type]);

  function handleTypeChange(value: string) {
    const selectedType = value as PickerType;
    setType(selectedType);
  }

  return (
    <>
      <CustomSelect
        className="w-40 h-10"
        value={type}
        onChange={handleTypeChange}
        options={options}
      />
      <CustomDatePicker
        className="w-60 h-10"
        type={type}
        onChange={handleDateChange}
      />
    </>
  );
}
