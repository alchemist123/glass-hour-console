import { Button } from "antd";
import { clsx } from "clsx/lite";
import { buttonTypes } from ".";

export default function CustomButton({
  label,
  className,
  htmlType,
  onClick,
  type = "primary",
  href,
  loading,
  ...props
}: buttonTypes) {
  return (
    <Button
      {...props}
      className={clsx("h-10", className)}
      htmlType={htmlType}
      onClick={onClick}
      type={type}
      href={href}
      loading={loading}
    >
      {label}
    </Button>
  );
}
