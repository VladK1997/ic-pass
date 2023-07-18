<script lang="ts" setup>
import type { PassListItem } from "@/common/domain/PassListItem";
import AppChipsItem from "@/ui-kit/AppChipsItem.vue";
import AppPassStrength from "@/ui-kit/AppPassStrength.vue";
import AppIcon from "@/ui-kit/AppIcon.vue";

defineProps<{
  list: PassListItem[];
}>();
</script>
<template>
  <table class="pass-list">
    <tbody>
      <tr
        v-for="(item, index) in list"
        :key="index"
        class="pass-list__item pass-item"
      >
        <td>
          <div class="pass-item__cell">
            <div class="pass-item__icon">
              <img :src="item.template.imgSrc" :alt="item.template.label" />
            </div>
            <div>
              <p class="body-16">{{ item.template.label }}</p>
              <p class="pass-item__email body-12">{{ item.email }}</p>
            </div>
          </div>
        </td>
        <td>
          <div class="pass-item__cell">
            <p class="pass-item__link body-16">
              {{ item.link }}
            </p>
          </div>
        </td>
        <td>
          <div class="pass-item__cell">
            <AppChipsItem
              size="sm"
              :label="item.tag.label"
              :icon="item.tag.icon"
            />
          </div>
        </td>
        <td>
          <div class="pass-item__cell">
            <AppPassStrength password="link" />
          </div>
        </td>
        <td class="d-flex items-center">
          <div class="pass-item__cell">
            <AppIcon name="info-circle" size="xxl" />
            <AppIcon name="copy" size="xxl" />
            <AppIcon name="edit" size="xxl" />
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped lang="scss">
.pass-list {
  width: 100%;
}
.pass-item {
  flex-wrap: wrap;
  &__cell {
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: rem(14) 0;
  }
  td {
    vertical-align: middle;
  }
  &__icon {
    width: rem(36);
    height: rem(36);
    border-radius: 50%;
    overflow: hidden;
    margin-right: rem(16);
    img {
      width: 100%;
      height: 100%;
      display: block;
      object-position: center;
    }
  }
  &__email {
    color: $color-grey-400;
  }
}
</style>
