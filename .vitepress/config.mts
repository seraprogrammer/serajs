import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SeraJS",
  description:
    "🤷‍♀️ SeraJS is a lightweight, signal-based reactive JavaScript library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/getting-started" }],
      },
      {
        text: "API Reference",
        items: [
          { text: "setSignal", link: "/hooks/set-signal" },
          { text: "setEffect", link: "/hooks/set-effect" },
          { text: "setMemo", link: "/hooks/set-memo" },
          { text: "Fragment", link: "/hooks/fragment" },
          { text: "h - hyperscript", link: "/hooks/h" },
        ],
      },
      {
        text: "Tutorials",
        items: [
          { text: "Data Fetching", link: "/tutorials/data-fetching" },
          { text: "State Management", link: "/tutorials/state-management" },
          {
            text: "Reusable components",
            link: "/tutorials/reusable-component",
          },
        ],
      },
      {
        text: "No Build",
        items: [{ text: "Index.html", link: "/nobuild/index" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sera-js/sera" },
      { icon: "discord", link: "https://discord.gg/whEJ7K8deQ" },
    ],
  },
});
