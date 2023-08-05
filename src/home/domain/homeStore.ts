import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomeStore = defineStore("homeStore", () => {
  const activeCard = ref("");
  const isWelcomePass = ref(true);
  return {
    activeCard,
    isWelcomePass,
  };
});
