import { defineConfig } from "vitepress";
import { useSidebar } from "vitepress-openapi";
import spec from "../public/openapi.json" with { type: "json" };

const sidebar = useSidebar({
  spec,
  // Optionally, you can specify a link prefix for all generated sidebar items.
  linkPrefix: "/operations/",
});

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  title: "Hound Media Server",
  description: "Hound Media Server",

  themeConfig: {
    nav: [{ text: "Getting Started", link: "/introduction" }],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          {
            text: "Introduction",
            link: "/introduction",
          },
          {
            text: "Platforms",
            link: "/platforms",
          },
          {
            text: "Pricing and Philosophy",
            link: "/pricing-model",
          }
        ],
      },
      {
        text: "Quick Setup Guide",
        items: [
          {
            text: "Installation",
            link: "/installation",
          },
          {
            text: "Setting Up Your First Provider",
            link: "/provider",
          },
          {
            text: "Managing your Library",
            link: "/library",
          },
        ],
      },
      {
        text: "API Documentation",
        items: [
          {
            text: "Introduction",
            link: "/operations/introduction",
          },
          ...sidebar.generateSidebarGroups(),
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Hound-Media-Server/hound' }
    ]
  },
  /** Give each dynamic page its own <title> */
  transformPageData(pageData) {
    // params returned from [*].paths.js|ts are available here
    const pageTitle = pageData.params?.pageTitle;

    if (pageTitle) {
      pageData.title = pageTitle;
      pageData.frontmatter ??= {};
      pageData.frontmatter.title = pageTitle;
    }
  },
});
