import { Badge, Card } from "antd";

export default function TimelineBadge({
  text,
  className,
  hour,
}: {
  text: string;
  className: string;
  hour: number | string;
}) {
  return (
    <Badge.Ribbon style={{ zIndex: 0 }} text={hour} color="blue">
      <Card style={{ zIndex: 0 }} size="small" className={className}>
        <Badge color="blue" text={text} />
      </Card>
    </Badge.Ribbon>
  );
}
