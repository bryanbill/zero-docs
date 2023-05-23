import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <>
      <span className="font-extrabold text-2xl text-purple-500">Zero</span>
    </>
  ),
  banner: {
    text: (
      <div className="flex items-center justify-center w-full h-full p-4 text-center bg-purple-500">
        <div className="flex flex-col items-center justify-center w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-white">Zero</h1>
          <p className="mt-2 text-xl text-white">
            A simple, fast, and lightweight web framework for Deno.
          </p>
        </div>
      </div>
    ),
  },
  project: {
    link: "https://github.com/bryanbill/zero",
  },

  docsRepositoryBase: "https://github.com/bryanbill/zero",
  footer: {
    text: "Zero",
  },
};

export default config;
