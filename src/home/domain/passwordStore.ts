import { defineStore } from "pinia";
import { ref } from "vue";
import type { Password } from "@/home/domain/Password";

export const usePasswordStore = defineStore("passwordStore", () => {
  const password = ref<Password | null>({
    template: "",
    email: "",
    password: "",
    link: "",
    tag: {
      label: "Select Tag",
      value: null,
    },
    notes: "",
  });

  function setPassword(payload: Password) {
    password.value = payload;
  }
  function resetStore() {
    password.value = null;
  }

  return {
    password,
    setPassword,
    resetStore,
  };
});
