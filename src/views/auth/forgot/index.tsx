import { Form, FormProps } from "antd";
import mail_icon from "../../../assets/Icons/mail.svg";
import CustomButton from "../../../components/common/CustomButton";
import CustomCard from "../../../components/common/CustomCard";
import CustomInput from "../../../components/common/CustomInput";

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
          name="basic"
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
            Forgot your password
          </h1>
          <div className="flex justify-center items-center">
            <img
              src={mail_icon}
              className="h-20 w-20 text-center flex justify-center mb-5"
            />
          </div>
          <h1 className="text-sm text-secondary text-center font-medium w-full mb-5 whitespace-nowrap">
            Provide your registered email to receive a reset link.
          </h1>
          <Form.Item
            label="Email"
            name="email"
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
            <CustomInput placeholder="Please input your email" />
          </Form.Item>
          <CustomButton
            type="primary"
            label="Submit"
            className="w-full mt-5"
            htmlType="submit"
          />
        </Form>
      </CustomCard>
    </div>
  );
}
