import { Input } from "antd";
import { clsx } from "clsx/lite";
import { inputType } from ".";

export default function CustomInput({ className, ...props }: inputType) {
  return (
    <Input
      {...props}
      size="large"
      variant="outlined"
      className={clsx("h-10", className)}
    />
  );
}
