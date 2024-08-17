import { Select, SelectProps } from "antd";

export default function CustomSelect({ options, ...props }: SelectProps) {
  return (
    <Select {...props}>
      {options?.map((item) => (
        <Select.Option key={item?.value} value={item?.value}>
          {item?.key}
        </Select.Option>
      ))}
    </Select>
  );
}
