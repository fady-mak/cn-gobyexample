<template>
  <h1>{{ page.title }}</h1>
</template>

<script setup>
import { useData } from "vitepress";
const { page } = useData();
</script>

<style lang="less" scoped>
h1 {
  letter-spacing: -0.02em;
  line-height: 40px;
  font-size: 28px;
  position: relative;
  font-weight: 600;
  outline: none;
  margin-bottom: 32px;
}

@media (min-width: 768px) {
  .vp-doc h1 {
    letter-spacing: -0.02em;
    line-height: 40px;
    font-size: 32px;
    margin-bottom: 24px;
  }
}
</style>
