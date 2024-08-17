import { Input, InputProps } from "antd";
import { clsx } from "clsx/lite";

export default function CustomInput({ className, ...props }: InputProps) {
  return (
    <Input
      {...props}
      size="large"
      variant="outlined"
      className={clsx("h-10", className)}
    />
  );
}
