import { Select } from "antd";
import { selectType } from ".";

export default function CustomSelect({
  value,
  onChange,
  options,
  className,
  ...props
}: selectType) {
  return (
    <Select {...props} value={value} onChange={onChange} className={className}>
      {options?.map((item) => (
        <Select.Option key={item?.value} value={item?.value}>
          {item?.key}
        </Select.Option>
      ))}
    </Select>
  );
}
