import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Zero is a fast, lightweight and scalable Dart backend framework"
        />
        <meta property="og:title" content="Zero" />
        <meta
          property="og:description"
          content="Zero is a fast, lightweight and scalable Dart backend framework"
        />
    </>
  ),
  feedback: {
    content: "Is this page helpful?",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  logo: (
    <>
      <span className="font-extrabold text-2xl text-purple-500">Zero</span>
    </>
  ),

  project: {
    link: "https://github.com/bryanbill/zero-docs",
  },

  docsRepositoryBase: "https://github.com/bryanbill/zero-docs/tree/main",
  footer: {
    text: "Zero",
  },
};

export default config;
