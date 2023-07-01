<script lang="ts" setup>
import AppChipsItem from "@/ui-kit/AppChipsItem.vue";
import { ref } from "vue";

const chips = [
  {
    icon: "social",
    title: "Social network",
    count: 0,
  },
  {
    icon: "banking",
    title: "Banking",
    count: 2,
  },
  {
    icon: "eCommerce",
    title: "E-commerce",
    count: 0,
  },
  {
    icon: "services",
    title: "Services",
    count: 0,
  },
  {
    icon: "education",
    title: "Education",
    count: 0,
  },
  {
    icon: "otherPassCategory",
    title: "Other",
    count: 0,
  },
];
const isAllChips = ref(false);
</script>
<template>
  <div class="passwords">
    <div class="passwords__header">
      <AppChipsItem
        v-for="(chipsItem, index) in chips"
        :key="chipsItem.title"
        :label="chipsItem.title"
        :icon="chipsItem.icon"
        :count="chipsItem.count"
        v-show="index < 3 || isAllChips"
        class="passwords__header-chips"
      />
      <AppChipsItem
        :label="'+' + (chips.length - 3)"
        v-show="!isAllChips"
        @click="isAllChips = true"
        class="passwords__header-chips"
      />
    </div>
    <div class="passwords__content">
      <h1 class="passwords__heading heading">Welcome to Pass</h1>
      <p class="passwords__subtitle body-16">
        Connect your Internet Identity and start creating and managing your
        passwords.
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.passwords {
  background: linear-gradient(180deg, #242526 0%, #202021 50.1%);
  border-radius: 16px;
  height: 100%;
  &__header {
    padding: rem(24);
    border-bottom: 1px solid $color-grey-700;
    display: flex;
    flex-wrap: wrap;
    gap: rem(6);
  }
  &__header-chips {
    cursor: pointer;
  }
  &__content {
    padding: rem(32) rem(24);
  }
  &__heading {
    text-align: center;
  }
  &__subtitle {
    text-align: center;
    letter-spacing: -0.5px;
    max-width: rem(367);
    margin: rem(16) auto rem(28);
    color: $color-grey-400;
  }
}
</style>
