import { defineStore } from "pinia";
import { ref, toRaw} from "vue";
import { AuthClient } from "@dfinity/auth-client";
import type { ActorMethod, ActorSubclass, Identity } from "@dfinity/agent";
import { createActor, canisterId } from "@/common/declarations/icpass_backend";

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
    identityProvider: "https://identity.ic0.app/#authorize"
  },
};

function actorFromIdentity(identity) {
  return createActor(canisterId, {
    agentOptions: {
      identity,
    },
  });
}

export const useAuthStore = defineStore("auth", () => {
  const isReady = ref(false);
  const isAuthenticated = ref(false);
  const authClient = ref<AuthClient | null>(null);
  const identity = ref<Identity | null>(null);
  const whoamiActor = ref<ActorSubclass<Record<string, ActorMethod<unknown[], unknown>>> | null>(null);

  async function init() {
    authClient.value = await AuthClient.create(defaultOptions.createOptions);
    isAuthenticated.value = await authClient.value.isAuthenticated();
    identity.value = isAuthenticated.value
      ? authClient.value.getIdentity()
      : null;
    whoamiActor.value = identity.value ? actorFromIdentity(identity) : null;
    isReady.value = true;
    login();
  }

  async function login() {
    const client = toRaw(authClient.value);
    client?.login({
      ...defaultOptions.loginOptions,
      onSuccess: async () => {
        isAuthenticated.value = await client.isAuthenticated();
        identity.value = isAuthenticated.value
          ? client.getIdentity()
          : null;
        console.log((identity.value)? (identity.value.getPrincipal().toString()) : "not logged in");
        whoamiActor.value = identity.value
          ? actorFromIdentity(identity.value)
          : null;
      },
    });
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
    isReady,
    isAuthenticated,
    authClient,
    identity,
    whoamiActor,
  };
});