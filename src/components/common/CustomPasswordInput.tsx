import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import { clsx } from "clsx/lite";
import { passwordInputType } from ".";

export default function CustomPasswordInput({
  className,
  ...props
}: passwordInputType) {
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
