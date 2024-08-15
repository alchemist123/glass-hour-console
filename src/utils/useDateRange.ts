import dayjs, { Dayjs } from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import isToday from "dayjs/plugin/isToday";
import { daysOfWeek } from "./daysOfWeek";
dayjs.extend(isoWeek);
dayjs.extend(isToday);

export type DateMap = { [key: string]: string | null };

export function useDateRangeWeek(date_string: Dayjs | string) {
  const date = dayjs(date_string).startOf("isoWeek");

  const temp_date_array: DateMap[] = Array.from({ length: 7 }, (_, i) => ({
    [daysOfWeek[i]]: date.add(i, "day").format("YYYY-MM-DD"),
  }));

  const date_array: DateMap = temp_date_array.reduce(
    (acc, day) => ({ ...acc, ...day }),
    {}
  );

  return { datesOfWeek: [date_array] };
}

export function useDateRangeDay(date_string: Dayjs | string) {
  const date = dayjs(date_string);
  const date_array = {
    [daysOfWeek[date.day()]]: dayjs(date_string).format("YYYY-MM-DD"),
  };

  return { dateOfDay: [date_array] };
}

export function useDateRangeMonth(date_string: Dayjs | string) {
  const date: Dayjs = dayjs(date_string);
  const days_in_month: number = date.daysInMonth();

  const dates_of_month: string[] = Array.from(
    { length: days_in_month },
    (_, i) => date.date(i + 1).format("YYYY-MM-DD")
  );

  let firstDayOfMonth: number = date.startOf("month").day();
  firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  const temp_date_array: (string | null)[] = Array(firstDayOfMonth)
    .fill(null)
    .concat(dates_of_month);

  const date_array: DateMap[] = Array.from(
    { length: Math.ceil(temp_date_array.length / 7) },
    (_, i) => {
      const week = temp_date_array.slice(i * 7, (i + 1) * 7);
      return daysOfWeek.reduce(
        (acc, day, j) => ({ ...acc, [day]: week[j] || null }),
        {}
      );
    }
  );

  return { datesOfMonth: date_array };
}
