<script setup lang="ts">
import AppAllPasswords from "@/common/views/components/AppAllPasswords.vue";
import Onboarding from "@/home/views/Onboarding.vue";
import ProfileDetails from "@/home/views/parts/ProfileDetails.vue";
import InstanceEditor from "@/home/views/parts/InstanceEditor.vue";
</script>
<template>
  <div class="home">
    <AppAllPasswords class="home__passwords" />
    <!--<Onboarding class="home__onboarding" />-->
    <!--<ProfileDetails class="home__onboarding" />-->
    <InstanceEditor class="home__onboarding" />
  </div>
</template>
<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  gap: rem(10);
  &__passwords {
    min-width: calc(50% - #{rem(5)});
    flex-grow: 1;
    flex-shrink: 1;
  }
  &__onboarding {
    width: calc(50% - #{rem(5)});
    flex-shrink: 0;
    flex-grow: 1;
  }
}
</style>
