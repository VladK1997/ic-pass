<template>
  <div class="home-card">
    <div class="home-card__header">
      <slot name="header" />
    </div>
    <div class="home-card__content">
      <slot />
    </div>
    <div class="home-card__footer">
      <div class="home-card__footer-content">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-card {
  background: linear-gradient(180deg, #242526 0%, #202021 50.1%);
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  &__header {
    border-bottom: 1px solid $color-grey-700;
  }
  &__content {
    padding: rem(32) rem(24);
  }
  &__footer {
    margin-top: auto;
    padding: 0 rem(24);
  }
  &__footer-content {
    padding: rem(24) 0;
    border-top: 1px solid $color-grey-700;
  }
}
</style>
