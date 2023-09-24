import { defineStore } from "pinia";
import { generateRoomNumber } from "~/utils/utils";
import { Player } from "~/models/Player";
import { useUserStore } from "~/store/user";

export const useRoomStore = defineStore("room", {
  state: () => ({
    id: "",
    passwordHash: "",
    players: [] as Player[],
    createTimestamp: "",
  }),
  actions: {
    createNewRoom() {
      const userStore = useUserStore();
      if (userStore.currentPlayer) {
        const roomNumber = generateRoomNumber();

        this.id = roomNumber;
        this.createTimestamp = `${new Date().getTime()}`;
        this.players.push(userStore.currentPlayer);

        this.redirectToRoom(roomNumber);
      }
    },
    openRoom(roomNumber: string) {
      this.redirectToRoom(roomNumber);
    },
    redirectToRoom(roomNumber: string) {
      const router = useRouter();
      router.push(`/room/${roomNumber}`);
    },
  },
});
