<script setup>
import { Avatar, ArrowLeft } from '@element-plus/icons-vue';
import RegisterForm from './RegisterForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToBack() {
  router.push({ name: 'login' });
}
</script>

<template>
  <div class="register">
    <div class="register__header">
      <button 
        class="register__back-btn"
        @click="goToBack"
      >
        <el-icon><ArrowLeft /></el-icon>
        뒤로가기
      </button>
      <span>|</span>
      <h1>
        <el-icon color="#409eff"><Avatar /></el-icon>
        회원가입
      </h1>
    </div>

    <div class="register__form-wrapper">
      <RegisterForm />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & > div {
    width: 70%;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;

    & > span {
      font-weight: 100;
    }

    & > h1 {
      display: flex;
      align-items: center;
      gap: 0.6rem;
    }
  }

  &__back-btn {
    font-size: 0.9rem;
    &:hover {
      color: #000;
    }
  }

  &__form-wrapper {
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    padding: 1rem;
  }
}
</style>
