import { Form, FormProps } from "antd";
import CustomButton from "../../../components/common/CustomButton";
import CustomCard from "../../../components/common/CustomCard";
import CustomInput from "../../../components/common/CustomInput";
import CustomPasswordInput from "../../../components/common/CustomPasswordInput";

interface FieldType {
  email: string;
  password: string;
}

export default function Index() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-custom_gradient_1">
      <CustomCard className="m-0 md:m-5 p-0 md:p-5">
        <Form
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          className="w-80"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className="text-3xl text-secondary text-center font-medium w-full mb-5">
            Login to your account
          </h1>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                message: "Please input your email!",
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              },
            ]}
          >
            <CustomInput placeholder="Please input your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            className="mb-0"
            rules={[
              {
                required: true,
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters long and include letters, numbers, and special characters.",
              },
            ]}
          >
            <CustomPasswordInput placeholder="Please input your password" />
          </Form.Item>
          <div className="flex w-full items-center justify-end mt-1 mb-5">
            <a
              href="/auth/forgot"
              className="text-primary text-sm cursor-pointer hover:underline whitespace-nowrap"
            >
              Forgot ?
            </a>
          </div>
          <CustomButton
            type="primary"
            label="Submit"
            className="w-full"
            htmlType="submit"
          />
          <div className="mt-6 w-full text-sm flex tracking-wide justify-center items-center gap-2">
            <p className="text-secondary opacity-60">Don't Have An Account?</p>
            <a
              href="/auth/sign-in"
              className="text-primary hover:underline cursor-pointer"
            >
              Sign Up
            </a>
          </div>
        </Form>
      </CustomCard>
    </div>
  );
}
