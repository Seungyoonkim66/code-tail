<script setup>
import { reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';
import { dummyUsers } from '@/assets/dummy/user.dummy';
import { ElMessage } from 'element-plus';

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

  // TEMP: dummy data 사용
  const user = dummyUsers[form.id];

  if (!user) {
    ElMessage.error('존재하지 않는 사용자입니다.');
    resetForm();
    return;
  } else if (user.pw === form.pw) {
    console.log('로그인 성공', user);
    authStore.authenticate();
    authStore.setUser(user);
    router.push({ name: 'main' });
  } else {
    ElMessage.error('비밀번호가 일치하지 않습니다.');
    resetForm();
    return;
  }
}

function register() {
  router.push({ name: 'register' });
}

function resetForm() {
  form.id = '';
  form.pw = '';

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
          clearable
        />
      </el-form-item>
      <el-form-item label="비밀번호">
        <el-input 
          v-model="form.pw"
          placeholder="비밀번호"
          show-password
          clearable
          type="password"
          max="16"
          @keyup.enter="login"
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
