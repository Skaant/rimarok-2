import { Link } from "gatsby";
import * as React from "react";
import Header from "../types/Header";

type TableOfContentsProps = {
  contents: { [key: string]: Header };
};

function TableOfContents({ contents }: TableOfContentsProps) {
  return (
    <ul>
      {Object.values(contents).map(({ id, title }) => (
        <li>
          <Link to={`#${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default TableOfContents;