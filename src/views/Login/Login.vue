<script setup>
import LoginInfo from './LoginInfo.vue';
import LoginForm from './LoginForm.vue';
</script>

<template>
<div class="login">

  <div class="login__body">
    <div class="login__info">
      <LoginInfo />
    </div>

    <div class="login__form">
      <LoginForm />
    </div>
  </div>

</div>
</template>

<style lang="scss" scoped>
.login {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__body {
    max-width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__info {
    width: 100%;
    border-right: 1px solid #dcdfe6;
    padding-right: 2rem;
  }

  &__form {
    width: 100%;
    padding-left: 2rem;
  }
}
</style>
