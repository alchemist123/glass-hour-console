import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import locale from "antd/es/locale/en_GB";
import dayjs from "dayjs";
import "dayjs/locale/en-gb";
import { datePickerType } from ".";

const dayFormat: string = "dddd DD MMM YYYY";
const monthFormat: string = "MMMM YYYY";
const weekFormat = "DD MMM YYYY";

const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("isoWeek").format(weekFormat)} ~ ${dayjs(value)
    .endOf("isoWeek")
    .format(weekFormat)}`;

function formatSorter(type: string): DatePickerProps["format"] {
  switch (type) {
    case "week":
      return customWeekStartEndFormat;
    case "date":
      return dayFormat;
    case "month":
      return monthFormat;
    default:
      return undefined;
  }
}

export default function CustomDatePicker({
  type = "week",
  onChange,
  className,
  minDate,
}: datePickerType) {
  return (
    <ConfigProvider locale={locale}>
      <DatePicker
        className={className}
        allowClear={false}
        picker={type}
        minDate={minDate}
        defaultValue={dayjs()}
        maxDate={dayjs()}
        onChange={onChange}
        format={formatSorter(type)}
        showWeek={false}
      />
    </ConfigProvider>
  );
}
