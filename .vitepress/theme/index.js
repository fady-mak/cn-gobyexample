// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import DocBefore from "./DocBefore.vue";
import AsideTop from "./AsideTop.vue";
import "./style.less";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "doc-before": () => h(DocBefore),
      "aside-top": () => h(AsideTop),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
