<template>
  <div class="source-card">
    <a
      class="source-card__link"
      v-if="page?.sourceCode"
      :href="page.sourceCode"
      :title="page.title"
      :alt="page.title"
      target="_blank"
    >
      <svg
        t="1697876979145"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="18274"
        width="16"
        height="16"
      >
        <path
          d="M736.938667 370.56a42.666667 42.666667 0 1 1 62.122666-58.453333l170.666667 181.333333a42.666667 42.666667 0 0 1 0 58.453333l-170.666667 181.333334a42.666667 42.666667 0 0 1-62.122666-58.453334l143.146666-152.106666-143.146666-152.106667z m-449.877334 0L143.914667 522.666667l143.146666 152.106666a42.666667 42.666667 0 0 1-62.122666 58.453334l-170.666667-181.333334a42.666667 42.666667 0 0 1 0-58.453333l170.666667-181.333333a42.666667 42.666667 0 0 1 62.122666 58.453333z"
          fill="currentColor"
          p-id="18275"
        ></path>
        <path
          d="M559.130732 171.254372m41.212835 11.042946l0 0q41.212835 11.042946 30.16989 52.255781l-154.601243 576.979694q-11.042946 41.212835-52.255781 30.169889l0 0q-41.212835-11.042946-30.16989-52.255781l154.601243-576.979694q11.042946-41.212835 52.255781-30.169889Z"
          fill="currentColor"
          opacity=".3"
          p-id="18276"
        ></path>
      </svg>
      <div class="text-wrapper">
        <span class="text"> Source Code </span>
      </div>
    </a>
    <div class="source-card__footer">
      <span class="tag"># Source Code</span>
      <span class="tag"># {{ page?.conf?.en }}</span>
      <span class="tag" v-if="page?.conf?.zh !== page?.conf?.en">
        # {{ page?.conf?.zh }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useData } from "vitepress";
const { page } = useData();
</script>

<style lang="less" scoped>
.source-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background-color: var(--vp-sidebar-bg-color);
  border: 1px solid var(--vp-c-gray-3);
  box-shadow: var(--vp-shadow-1);
  &__link {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;
    font-size: 12px;
    font-family: Courier, monospace;
    color: var(--c-text-muted);
    background-color: var(--vp-c-gray-3);
    color: var(--vp-c-indigo-3);
    padding: 4px 12px;
    .text-wrapper {
      display: flex;
      align-items: center;
      flex: 1;
      overflow: hidden;
      .text {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  &__footer {
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 2px 12px;
    gap: 0 12px;
    font-size: 12px;
    color: var(--vp-c-gray-4);
    word-wrap: break-word;
    text-wrap: wrap;
    flex-wrap: wrap;
    opacity: 0.5;
    .tag {
      text-wrap: nowrap;
      line-height: 1.75;
    }
  }
}
</style>
