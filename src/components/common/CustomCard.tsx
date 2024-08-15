import { Card } from "antd";

import { clsx } from "clsx/lite";
import { cardTypes } from ".";
export default function CustomCard({ children, className }: cardTypes) {
  return <Card className={clsx("shadow-md", className)}>{children}</Card>;
}
