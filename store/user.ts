import { defineStore } from "pinia";
import { Player } from "~/models/Player";

export const useUserStore = defineStore("user", {
  state: () => ({
    currentPlayer: undefined as Player | undefined,
  }),
  getters: {
    getUsername(state) {
      return state.currentPlayer?.displayName ?? "";
    },
  },
  actions: {
    restorePlayerSession() {
      this.currentPlayer = {
        displayName: "Random name",
        id: generateUserId(),
      };

      const status = localStorage.getItem("status");
      if (status) {
        this.currentPlayer = JSON.parse(status);
      }
    },
  },
});
