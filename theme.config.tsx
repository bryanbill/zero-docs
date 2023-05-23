import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span className="font-extrabold text-2xl text-purple-500">Zero</span>
    </>
  ),
 
  project: {
    link: "https://github.com/bryanbill/zero",
  },

  docsRepositoryBase: "https://github.com/bryanbill/zero",
  footer: {
    text: "Zero",
  },
};

export default config;
