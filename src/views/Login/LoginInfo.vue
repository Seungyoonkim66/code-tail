<script setup lang="ts">
import Logo from '@/components/Logo';
</script>

<template>
  <div class="login-info">

    <div class="login-info__logo">
      <Logo />
    </div>

    <div class="login-info__title">
      CodeTail
    </div>

    <div class="login-info__sub-title">
      모든 국민은 보건에 관하여 국가의 보호를 받는다. 
    </div>

    <div class="login-info__description">
      지방의회의 조직·권한·의원선거와 지방자치단체의 장의 선임방법 기타 지방자치단체의 조직과 운영에 관한 사항은 법률로 정한다. 정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.
    </div>

  </div>
</template>

<style lang="scss" scoped>
.login-info {
  height: 100%;

  &__logo {
    width: 14rem;
  }

  &__title {
    font-weight: 600;
    font-size: 1.8rem;
  }
  &__sub-title {
    font-size: 0.85rem;
  }

  &__description {
    font-weight: 200;
    font-size: 0.5rem;
  }
}
</style>
