import * as React from "react";

import BibItem from "./BibItem";
import { renderPages, renderAuthor, renderDate } from "./utils";

/** An article from a journal or magazine. */
type Props = {
  label: string;
  author: string;
  title: string;
  journal: string;
  year: string;
  volume?: string;
  number?: string;
  pages?: string;
  month?: string;
  url?: string;
  note?: string;
};

const Article = ({ label, ...props }: Props): React.ReactElement => {
  const { author, title, journal, month, year, volume, number, pages, note } =
    props;

  const item = (
    <>
      {renderAuthor(author)}, <i>{title},</i> {journal}
      {volume ? <b> {volume}</b> : undefined} ({renderDate(month, year)})
      {number ? <>, no. {number}</> : undefined}
      {pages ? <>, {renderPages(pages)}</> : undefined}
      {note ? <>, {note}</> : undefined}
      {"."}
    </>
  );

  return <BibItem label={label}>{item}</BibItem>;
};

export default Article;
