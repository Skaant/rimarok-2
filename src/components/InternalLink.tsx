import { Link } from "gatsby";
import React from "react";
import { PAGES, PAGES_DATA } from "../data/pages";
import Section from "../types/Section";

type InternalLinkProps = {
  page?: PAGES;
  section?: Section;
  altTitle?: string;
  lowercase?: true;
};

function InternalLink({
  page,
  section,
  altTitle,
  lowercase,
}: InternalLinkProps) {
  return (
    <Link
      to={`${page ? `${PAGES_DATA[page].path}` : ""}${
        section ? `#${section.id}` : ""
      }`}
    >
      {altTitle ||
        (section
          ? section.title
          : page
          ? PAGES_DATA[page].title
          : ""
        ).toLowerCase()}
    </Link>
  );
}

export default InternalLink;
