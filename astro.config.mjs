import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import remarkMdxCodeMeta from "remark-mdx-code-meta";
import react from "@astrojs/react";
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
        remarkPlugins: [remarkMdxCodeMeta],
        remarkRehype: {
            footnoteLabel: "Footnotes"
        },
        gfm: false
    }), react(), unocss(), swup({
        smoothScrolling: true
    })],
    adapter: cloudflare({
        imageService: 'cloudflare',
    }),
    output: "server"
});
