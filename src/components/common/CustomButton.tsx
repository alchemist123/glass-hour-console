import { Button } from "antd";
import { clsx } from "clsx/lite";
import { buttonTypes } from ".";

export default function CustomButton({
  label,
  className,
  ...props
}: buttonTypes) {
  return (
    <Button {...props} className={clsx("h-10", className)}>
      {label}
    </Button>
  );
}
