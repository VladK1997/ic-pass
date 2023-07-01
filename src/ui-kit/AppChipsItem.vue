<script setup lang="ts">
import AppIcon from "@/ui-kit/AppIcon.vue";
type propsType = {
  type?: string;
  label?: string;
  icon?: string;
  count?: string | number;
};

const props = withDefaults(defineProps<propsType>(), {
  type: "grey",
});
const emit = defineEmits(["handleClick"]);
function handleClick() {
  emit("handleClick");
}
</script>

<template>
  <div class="chips-item-wrap">
    <div class="chips-item" :class="[props.type]" @click="handleClick">
      <AppIcon size="lg" :name="props.icon" v-if="props.icon" />
      <p class="chips-item__label">{{ props.label }}</p>
      <p class="chips-item__count" v-if="typeof props.count === 'number'">
        {{ props.count }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/ui/colorsViews.scss";
.chips-item-wrap {
  display: flex;
}
.chips-item {
  font-weight: 400;
  font-size: rem(14);
  line-height: rem(16);
  letter-spacing: -0.5px;
  padding: rem(4) rem(10) rem(4) rem(6);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  &__count {
    background-color: $color-grey-50;
    display: flex;
    align-items: center;
    justify-content: center;
    height: rem(16);
    width: rem(20);
    color: $color-grey-900;
    border-radius: rem(20);
    font-weight: 300;
    font-size: rem(12);
    line-height: rem(12);
    margin-left: rem(8);
  }
  &__label {
    margin-left: rem(6);
  }
  &.lightGrey {
    background-color: #52555c;
    color: #fff;
  }
  &.grey {
    background-color: $color-grey-700;
    color: $color-white;
  }
  &.transparent {
    background-color: transparent;
  }
}
</style>
