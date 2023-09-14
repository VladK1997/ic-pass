import { defineStore } from "pinia";
import { ref, toRaw } from "vue";
import { AuthClient } from "@dfinity/auth-client";
import type { ActorMethod, ActorSubclass, Identity } from "@dfinity/agent";
import {createActor
} from "@/common/declarations/whoami";

export type StoredKey = string | any;
export class AuthClientStorage {
  async get(key: string): Promise<StoredKey | null> {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  async set(key: string, value: StoredKey): Promise<void>{
    await localStorage.setItem(key, JSON.stringify(value));
  }

  async remove(key: string): Promise<void> {
    await localStorage.removeItem(key);
  }
}

const defaultOptions = {
  /**
   *  @type {import("@dfinity/auth-client").AuthClientCreateOptions}
   */
  createOptions: {
    idleOptions: {
      // Set to true if you do not want idle functionality
      disableIdle: true,
    },
  },
  /**
   * @type {import("@dfinity/auth-client").AuthClientLoginOptions}
   */
  loginOptions: {
    identityProvider: `http://localhost:4943?canisterId=${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}#authorize`,
  },
};

export const useAuthStore = defineStore("auth", () => {
  const isReady = ref(false);
  const isAuthenticated = ref(false);
  const authClient = ref<AuthClient | null>(null);
  const identity = ref<Identity | null>(null);
  const whoamiActor = ref<ActorSubclass<Record<string, ActorMethod<unknown[], unknown>>> | null>(null);

  async function init() {
    authClient.value = await AuthClient.create({
      storage: new AuthClientStorage(),
      keyType: "Ed25519",
    });
    isAuthenticated.value = await authClient.value.isAuthenticated();
    identity.value = isAuthenticated.value
      ? await authClient.value.getIdentity()
      : null;
    whoamiActor.value = identity.value
      ? await actorFromIdentity(identity)
      : null;
    await actorFromIdentity(identity.value);
    isReady.value = true;
  }

  async function actorFromIdentity(identity: any): any {
    const actor = createActor(import.meta.env.VITE_CANISTER_ID);
    console.log(identity);
    return actor;
  }

  async function login() {
    const client = toRaw(authClient.value);
    try {
      await client?.login({
        ...defaultOptions.loginOptions,
        maxTimeToLive: 7 * 24 * 60 * 60 * 1000 * 1000 * 1000 as any,
        onSuccess: async () => {
          isAuthenticated.value = await client.isAuthenticated();
          identity.value = isAuthenticated.value ? client.getIdentity() : null;
          whoamiActor.value = identity.value
            ? actorFromIdentity(identity.value)
            : null;
          console.log(whoamiActor);
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  async function logout() {
    const client = toRaw(authClient.value);
    await client?.logout();
    isAuthenticated.value = false;
    identity.value = null;
    whoamiActor.value = null;
  }

  return {
    init,
    login,
    logout,
    isReady,
    isAuthenticated,
    authClient,
    identity,
    whoamiActor,
  };
});
