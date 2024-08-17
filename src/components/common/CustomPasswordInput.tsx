import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input, InputProps } from "antd";
import { clsx } from "clsx/lite";

export default function CustomPasswordInput({
  className,
  ...props
}: InputProps) {
  return (
    <Input.Password
      {...props}
      size="large"
      className={clsx("h-10", className)}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
    />
  );
}
