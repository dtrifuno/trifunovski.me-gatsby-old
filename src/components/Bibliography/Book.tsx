import * as React from "react";

import BibItem from "./BibItem";
import { renderAuthor, renderBookEditor, renderDate } from "./utils";

/** A book with an explicit publisher. */
export type Props = ({ author: string } | { editor: string }) & {
  label: string;
  title: string;
  author?: string;
  editor?: string;
  edition?: string;
  series?: string;
  volume?: string;
  publisher: string;
  address?: string;
  month?: string;
  year: string;
  url?: string;
  note?: string;
};

const Book = ({ label, ...props }: Props): React.ReactElement => {
  const {
    title,
    author,
    editor,
    edition,
    series,
    volume,
    publisher,
    address,
    month,
    year,
    note,
  } = props;
  const item = (
    <>
      {author ? renderAuthor(author) : renderBookEditor(editor!)},{" "}
      <i>{title},</i> {edition ? <> {edition} ed.,</> : undefined}
      {series ? <> {series},</> : undefined}
      {volume ? <> vol. {volume},</> : undefined}
      {` ${publisher},`}
      {address ? <> {address},</> : undefined}
      {` ${renderDate(month, year)}`}
      {note ? <>, {note}</> : undefined}
      {"."}
    </>
  );
  return <BibItem label={label}>{item}</BibItem>;
};

export default Book;
