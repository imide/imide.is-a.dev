import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from "rehype-mdx-code-props";
import react from "@astrojs/react";
import unocss from "@unocss/astro";
import swup from "@swup/astro";
import node from "@astrojs/node";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://imide.xyz",
  integrations: [tailwind(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "css-variables"
    },
    remarkPlugins: [remarkMdxCodeMeta],
    remarkRehype: {
      footnoteLabel: "Footnotes"
    },
    gfm: false
  }), react(), unocss(), swup({
    smoothScrolling: true
  })],
  output: "server",
  adapter: cloudflare()
});