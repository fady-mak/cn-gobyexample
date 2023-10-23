import { defineConfig } from "vitepress";
import { buildSidebar, markDocRaw } from "./theme/config/aside";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Go by Example 中文版",
  base: "/cn-gobyexample/",
  description:
    "Go by Example 是对 Go 基于实践的介绍，包含一系列带有注释说明的示例程序",
  srcDir: "./core",
  outDir: "./dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover",
      },
      {
        name: "theme-color",
        content: "#165dff",
      },
      {
        name: "description",
        content:
          "Go by Example 是对 Go 基于实践的介绍，包含一系列带有注释说明的示例程序。",
      },
      {
        name: "keywords",
        content:
          "Go,golang,Go by Example,Go语言,Go语言入门,Go语言教程,Go语言学习,Go语言学习资料,Go语言教程",
      },
    ],
  ],
  lang: "zh-CN",
  cleanUrls: true,
  transformPageData: (page) => {
    if (page.filePath.indexOf("docs/") > -1) {
      const key = page.filePath.replace("docs/", "");
      const conf = markDocRaw[key];
      return {
        key,
        conf,
        ...page,
        sourceCode: `https://github.com/fady-mak/cn-gobyexample/blob/main/sources/${conf.source}`,
        title: conf?.zh === conf?.en ? conf.zh : `${conf.zh}(${conf.en})`,
      };
    }
    return page;
  },
  themeConfig: {
    // 页面上显示的logo
    logo: "/favicon.ico",
    socialLinks: [
      { icon: "github", link: "https://github.com/fady-mak/cn-gobyexample" },
    ], // 可以连接到 github
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Go by Example EN", link: "https://gobyexample.com" },
      {
        text: "Go by Example ZH",
        link: "https://gobyexample-cn.github.io/",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © present Fady Mak",
    },
    search: {
      provider: "local",
    },
    sidebar: buildSidebar,
  },
});
