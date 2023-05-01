<script setup lang="ts">
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

const HEADER_HEIGHT = 55;
</script>

<template>
  <div 
    class="base-layout"
    :style="{
      '--base-layout-padding-top': `${HEADER_HEIGHT + 1}px` // 1은 border width
    }"
  >
    <TheHeader :height="HEADER_HEIGHT"/>

    <div class="base-layout__body">
      <router-view />
    </div>

    <TheFooter />
  </div>
</template>

<style lang="scss" scoped>
.base-layout {
  padding-top: var(--base-layout-padding-top);

  &__body {
    min-height: calc(100vh - var(--base-layout-padding-top));
  }
}
</style>
