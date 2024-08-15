import { ButtonProps, CardProps, InputProps, SelectProps } from "antd";

interface buttonTypes extends ButtonProps {
  label: string;
  className?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  type: "link" | "default" | "primary" | "text" | "dashed" | undefined;
  href?: string;
  loading?: boolean;
}

interface cardTypes extends CardProps {
  className?: string;
  children?: JSX.Element;
}

interface datePickerType {
  type: "date" | "week" | "month" | "quarter" | "year" | undefined;
  onChange?:
    | ((date: dayjs.Dayjs, dateString: string | string[]) => void)
    | undefined;
  className?: string;
}

interface inputType extends InputProps {
  className?: string;
}

interface passwordInputType extends InputProps {
  className?: string;
}

interface selectOptionType {
  value: string;
  key: string;
}

interface selectType extends SelectProps {
  value: string;
  onChange:
    | ((
        value: string,
        option?: DefaultOptionType | DefaultOptionType[]
      ) => void)
    | undefined;
  options: selectOptionType[];
  className?: string;
}

export {
  buttonTypes,
  cardTypes,
  datePickerType,
  inputType,
  passwordInputType,
  selectType,
};
