import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import bun from "astro-bun-adapter";
import unocss from "@unocss/astro";
import swup from "@swup/astro";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://imide.is-a.dev",
  integrations: [tailwind(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables"
    },
    remarkPlugins: [remarkMdxCodeMeta, remarkMath],
    rehypePlugins: [rehypeKatex],
    remarkRehype: {
      footnoteLabel: "Footnotes"
    },
    gfm: false
  }), react(), unocss(), swup({
    smoothScrolling: true
  })],
  vite: {
    ssr: {
      noExternal: ["mafs"]
    }
  },
  adapter: cloudflare(),
  output: "server"
});