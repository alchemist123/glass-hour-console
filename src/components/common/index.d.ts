import { ButtonProps, CardProps } from "antd";
import { Dayjs } from "dayjs";

interface buttonTypes extends ButtonProps {
  label: string;
}

interface cardTypes extends CardProps {
  children: React.ReactNode;
  className?: string;
  ref?: React.LegacyRef<unknown> | undefined;
}

interface datePickerType {
  type: "date" | "week" | "month" | "quarter" | "year" | undefined;
  onChange?:
    | ((date: dayjs.Dayjs, dateString: string | string[]) => void)
    | undefined;
  className?: string;
  minDate?: Dayjs;
}

export { buttonTypes, cardTypes, datePickerType };
