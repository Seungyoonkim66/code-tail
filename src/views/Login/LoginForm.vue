<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

const router = useRouter();
const authStore = useAuthStore();

const form = reactive({
  id: '',
  pw: '',
});

const loginActive = computed(() => form.id.replaceAll(' ','') !== '' && form.pw.replaceAll(' ', '') !== '');

// TODO: apis/auth.api.js에서 axois.js 활용해서 api 콜하는 함수만들어서 여기서 연동하면 됨 
async function login() {
  // const [error, res] = await fetchLoginCheck(form.id, form.pw);
  // if (!error) {
  //   authStore.authenticate();
  //   router.push({ name: 'main' });
  // }
  console.debug(form.id, form.pw);
  authStore.authenticate();
  router.push({ name: 'main' });
}

function register() {
  router.push({ name: 'register' });
}

</script>

<template>
  <div class="login-form">

    <div class="login-form__header">
      <h1>로그인</h1>
    </div>

    <el-form 
      class="login-form__body"
      :model="form"
      label-width="80px"
      label-position="left"
    >
      <el-form-item label="아이디">
        <el-input 
          v-model="form.id"
          placeholder="아이디"
        />
      </el-form-item>
      <el-form-item label="비밀번호">
        <el-input 
          v-model="form.pw"
          placeholder="비밀번호"
        />
      </el-form-item>
    </el-form>

    <div>
      <el-button
        class="login-form__submit-btn"
        type="primary"
        :disabled="!loginActive"
        @click="login"
      >로그인</el-button>
      <el-button
        class="login-form__register-btn"
        @click="register"
      >회원가입</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-form {

  &__header {
    border-bottom: 1px solid #dcdfe6;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }

  &__body {
    padding: 0.5rem;
  }

  &__submit-btn {
    width: 100%;
    margin-bottom: 0.3rem;
  }

  &__register-btn {
    width: 100%;
    margin: 0;
  }
}
</style>
