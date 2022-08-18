import * as React from "react";
import clsx from "clsx";

interface Props {
  label: string;
  children: React.ReactElement;
}

const BibItem = ({ label, children }: Props): React.ReactElement => {
  return (
    <div
      key={label}
      id={`cite-key-${label}`}
      className="py-2 sm:grid sm:grid-cols-10"
    >
      <dt
        className={clsx(
          "sm:col-span-2 lg:col-span-1 sm:text-right",
          "text-primary-500 font-semibold"
        )}
      >{`[${label}]`}</dt>
      <dd className="sm:pl-3 sm:col-span-8 lg:col-span-9">{children}</dd>
    </div>
  );
};

export default BibItem;
