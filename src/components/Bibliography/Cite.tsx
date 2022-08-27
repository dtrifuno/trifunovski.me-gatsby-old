import { Link } from "gatsby";
import * as React from "react";

interface Props {
  citeKey: string;
}

const Cite = ({ citeKey }: Props): React.ReactElement => {
  return (
    <span className="citation">
      <Link to={`#cite-key-${citeKey}`}>[{citeKey}]</Link>
    </span>
  );
};

export default Cite;
