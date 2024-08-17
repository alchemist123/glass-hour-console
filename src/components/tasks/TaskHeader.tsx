import dayjs from "dayjs";
import CustomDatePicker from "../common/CustomDatePicker";

export default function TaskHeader({
  onChange,
}: {
  onChange: (date: dayjs.Dayjs, dateString: string | string[]) => void;
}) {
  return (
    <div className="flex items-center justify-end">
      <CustomDatePicker
        className="w-60 h-10"
        type="date"
        onChange={onChange}
        minDate={dayjs().startOf("M")}
      />
    </div>
  );
}
