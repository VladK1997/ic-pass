<script lang="ts" setup>
import HomeCard from "./HomeCard.vue";
import AppIcon from "@/ui-kit/AppIcon.vue";
import AppButton from "@/ui-kit/AppButton.vue";
import AppInput from "@/ui-kit/AppInput.vue";
import { useProfileStore } from "@/common/domain/stores/profileStore";

const profileStore = useProfileStore();
</script>
<template>
  <HomeCard class="instance-editor">
    <template #header>
      <h3 class="instance-editor__title subtitle-12">Add new Item</h3>
    </template>
    <div class="instance-editor__content">
      <div class="main-card-list">
        <div class="main-card-list__item">
          <AppInput
            type="email"
            label="Login or email"
            placeholder="Type here"
          />
        </div>
        <div class="main-card-list__item">
          <AppInput
            type="password"
            label="Create password"
            placeholder="Type here"
          />
        </div>
        <div class="main-card-list__item">
          <AppInput type="text" label="Link" placeholder="Type here" />
        </div>
        <div class="main-card-list__item">
          <AppInput
            type="text"
            label="Notes or seed phrase"
            placeholder="Type here"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <AppButton type="primary">Create Account</AppButton>
    </template>
  </HomeCard>
</template>
<style lang="scss" scoped>
@import "src/assets/styles/base/typography";
.instance-editor {
  &__title {
    text-align: center;
    padding: rem(30);
  }
}
.profile {
  &__details {
    margin-top: rem(40);
  }
  &__details-plan {
    @extend .body-16 !optional;
    display: flex;
  }
  &__details-plan-name {
    color: $color-green-light;
  }
  &__details-plan-info {
    margin-left: auto;
  }
}
.avatar {
  display: flex;
  align-items: center;
  &__photo {
    width: rem(96);
    height: rem(96);
    border-radius: 50%;
    border: 1.5px dashed $color-grey-500;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: rem(32);
    div {
      background-color: $color-grey-700;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__photo-img {
    object-fit: cover;
    object-position: center;
  }
  &__photo &__icon,
  &__photo-img {
    border-radius: 50%;
    width: rem(73.99);
    height: rem(73.99);
  }
  &__upload {
    position: relative;
    display: block;
    border: 1.5px solid $color-grey-500;
    border-radius: 8px;
    flex-grow: 1;
    flex-shrink: 0;
    cursor: pointer;
    transition: 0.3s;
    &:deep(.btn) {
      padding: rem(11);
      line-height: rem(22);
      pointer-events: none;
    }
    input {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      cursor: pointer;
      z-index: 1;
      &::file-selector-button {
        cursor: pointer;
      }
    }
    div {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    @include min-desktop() {
      &:hover {
        background-color: rgba($color-grey-500, 0.4);
      }
    }
  }
  &__title {
    margin-bottom: rem(12);
  }
  &__btns {
    display: flex;
    gap: 8px;
  }
  &__remove {
    flex-shrink: 1;
    padding: rem(11) rem(16);
    line-height: rem(22);
  }
  &__ext {
    margin-top: rem(8);
    color: $color-grey-400;
  }
}
</style>
