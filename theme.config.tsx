import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  head: (
    <>
      <meta property="og:url" content="https://zero.vercel.app" />
      <meta property="og:title" content="Zero" />
      <meta
        property="og:description"
        content="Zero -  A simple, fast, lightweight and scalable backend framework"
      />
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Zero",
        
      };
    }
  },
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
