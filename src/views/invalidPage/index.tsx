import { Result } from "antd";
import CustomButton from "../../components/common/CustomButton";

export default function Index() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <CustomButton type="link" href="/auth/sign-in" label="Back Home" />
        }
      />
    </div>
  );
}
