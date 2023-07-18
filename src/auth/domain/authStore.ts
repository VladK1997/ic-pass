import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Token } from "@/auth/domain/Token";

export const useAuthStore = defineStore("auth", () => {
  const token = ref<Token | null>(null);
  const isLoader = ref<boolean>(false);
  const isAuthorized = computed<boolean>(() => {
    return true; /*!!token.value;*/
  });
  async function getToken() {
    try {
      isLoader.value = true;
      const tokenStr = localStorage.getItem("token");
      if (!tokenStr) return;
      token.value = JSON.parse(tokenStr) as Token;
    } catch (e) {
      console.log(e);
    } finally {
      isLoader.value = false;
    }
  }
  return {
    token,
    isAuthorized,
    getToken,
  };
});
