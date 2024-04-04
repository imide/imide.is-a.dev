/** @type {import('tailwindcss').Config} */
export default {
  config: {
    variants: {
      extend: {
        translate: ["group-hover", "hover"],
      },
    },
  },
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Product Sans", "ui-sans-serif", "system-ui"],
      serif: ["Bree Serif", "ui-serif", "Georgia"],
      mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
      latex: ["Lusitana", "ui-serif"],
    },
    extend: {
      colors: {
        darker: "#000008",
        bg: "#0d0f18",
        mbg: "#050710",
        bg3: "#000008",
        fg: "#a5b6cf",
        bright: "#b0b3b8",
        error: "#dd6777",
        success: "#90ceaa",
        warn: "#d4bb88",
        primary: "#769adc",
        disabled: "#c296eb",
        secondary: "#8baff1",
      },
      screens: {
        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "960px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      lineHeight: {
        "extra-loose": "2.5",
        14: "3rem",
      },
      height: {
        fuller: "140vh",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
