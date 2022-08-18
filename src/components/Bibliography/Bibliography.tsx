import * as React from "react";

type Props = {
  children: React.ReactElement;
};

const Bibliography = ({ children }: Props): React.ReactElement => {
  return (
    <div className="clear-both">
      <h2 style={{ marginBottom: "0.6em" }}>References</h2>
      <dl>{children}</dl>
    </div>
  );
};

export default Bibliography;
