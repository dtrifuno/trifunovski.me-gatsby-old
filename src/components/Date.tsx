import React from "react";
import { parseISO, format } from "date-fns";

interface Props {
  isoString: string;
  className?: string;
  dateFormat?: string;
}

const Date = ({
  isoString,
  className,
  dateFormat = "MMM d, yyyy",
}: Props): React.ReactElement => {
  const date = parseISO(isoString);

  return (
    <time className={className} dateTime={format(date, "yyyy-MM-dd")}>
      {format(date, dateFormat)}
    </time>
  );
};

export default Date;
