export const renderPages = (pages: string): string => {
  return pages.replace("--", "–").replace("-", "–");
};

export const renderInPages = (pages: string): string => {
  const pagesString = renderPages(pages);
  return `${pagesString.includes("–") ? "pp." : "p."} ${pagesString}`;
};

export const renderAuthor = (author: string): string => {
  const people = author.split(/\s*,?\s+and\s*,?\s+/).map((person) =>
    person
      .split(/\s*,\s*/)
      .reverse()
      .join(" ")
  );

  if (people.length === 1) {
    return people[0];
  } else {
    const last_person = people[people.length - 1];
    const rest = people.slice(0, -1);
    return `${rest.join(", ")} and ${last_person}`;
  }
};

export const renderEditor = (editor: string): string => {
  const count = editor.split(/\s*,?\s+and\s*,?\s+/).length;
  return `${renderAuthor(editor)}, ed${count > 1 ? "s" : ""}.`;
};

export const renderBookEditor = (editor: string): string => {
  const count = editor.split(/\s*,?\s+and\s*,?\s+/).length;
  return `${renderAuthor(editor)}, (ed${count > 1 ? "s" : ""}.)`;
};

export const renderDate = (month?: string, year?: string): string =>
  [month, year].filter(Boolean).join(" ");
