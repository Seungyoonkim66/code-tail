<script setup>
import Logo from '@/components/Logo';
import nav from '@/nav';
import { useAuthStore } from '@/stores/auth.store';
import { ArrowDown } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';

const authStore = useAuthStore();
const route = useRoute();

defineProps({
  height: {
    type: Number,
    required: false,
  },
});

function accessible(allow) {
  if (allow === '*') return true;
  else allow.includes(authStore.user.type);
}

function logout() {
  authStore.logout();
  window.location.href = '/login';
}
</script>

<template>
  <div 
    class="the-header"
    :style="{
      '--the-header-height' : `${height}px`
    }"
  >

    <router-link to="/" class="the-header__logo">
      <Logo />
    </router-link>

    <div class="the-header__actions">

      <!-- TODO: item.allow 확인해서 * 이 아닌 경우에는 v-if 처리해줘야됨 -->
      <span
        v-for="(item) in nav"
        :key="item.id"
      >
        <router-link
          v-if="accessible(item.allow)"
          :to="item.to"
        >
          <el-button 
            type="info"
            text
            :class="{
              'the-header__link': true,
              'the-header__link--active': item.to.name === route.name
            }"
          >{{ item.name }}</el-button>
        </router-link>
      </span>

      <el-dropdown class="the-header__user-info">
        <el-button text>
          {{ authStore.user.name }} 님 &nbsp;&nbsp;
          <el-icon><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">로그아웃</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

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

  &__user-info {
    line-height: 0;
  }

  &__link {
    &--active {
      color: var(--el-color-primary);
    }
  }
}
</style>
