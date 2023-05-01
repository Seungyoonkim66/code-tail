<script setup>
import Logo from '@/components/Logo';
import nav from '@/nav';

defineProps({
  height: {
    type: Number,
    required: false,
  },
})
</script>

<template>
  <div 
    class="the-header"
    :style="{
      '--the-header-height' : `${height}px`
    }"
  >
    <a href="/" class="the-header__logo">
      <Logo />
    </a>

    <div class="the-header__actions">

      <!-- TODO: item.allow 확인해서 * 이 아닌 경우에는 v-if 처리해줘야됨 -->
      <router-link 
        v-for="(item) in nav"
        :key="item.id"
        :to="item.to"
      >
        <el-button 
          type="info"
          text
        >{{ item.name }}</el-button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #dcdfe6;
  height: var(--the-header-height);
  padding: 0 2rem;
  backdrop-filter: saturate(50%) blur(4px);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    width: 6rem;
  }

  &__actions {
    display: flex;
    gap: 0.3rem;
  }
}
</style>
