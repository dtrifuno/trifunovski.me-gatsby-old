import * as React from "react";

import BibItem from "./BibItem";
import { renderAuthor, renderDate, renderEditor, renderInPages } from "./utils";

/** An article in a conference proceedings. */
type Props = {
  label: string;
  author: string;
  title: string;
  booktitle: string;
  year: string;
  editor?: string;
  series?: string;
  volume?: string;
  pages?: string;
  address?: string;
  month?: string;
  organization?: string;
  publisher?: string;
  url?: string;
  note?: string;
};

const InProceedings = ({
  label,
  author,
  title,
  booktitle,
  address,
  editor,
  series,
  volume,
  organization,
  publisher,
  month,
  year,
  note,
  pages,
}: Props): React.ReactElement => {
  const item = (
    <>
      {renderAuthor(author)}, <i>{title},</i> {booktitle}
      {address ? <> ({address})</> : undefined}
      {editor ? <> ({renderEditor(editor)})</> : undefined}
      {","}
      {series ? <> {series},</> : undefined}
      {volume ? <> vol. {volume},</> : undefined}
      {organization ? <> {organization},</> : undefined}
      {publisher ? <> {publisher},</> : undefined} {renderDate(month, year)}
      {note ? <>, {note}</> : undefined}
      {pages ? <>, {renderInPages(pages)}</> : undefined}
      {"."}
    </>
  );
  return <BibItem label={label}>{item}</BibItem>;
};

export default InProceedings;
