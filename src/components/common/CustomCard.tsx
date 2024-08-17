import { Card } from "antd";
import { clsx } from "clsx/lite";
import { forwardRef } from "react";
import { cardTypes } from ".";

const CustomCard = forwardRef(
  ({ children, className, ...props }: cardTypes, ref) => {
    return (
      <Card ref={ref} {...props} className={clsx("shadow-md", className)}>
        {children}
      </Card>
    );
  }
);

export default CustomCard;
