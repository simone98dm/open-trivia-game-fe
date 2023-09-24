<script setup lang="ts">
import { useRoomStore } from "~/store/room";
import { useUserStore } from "~/store/user";

const roomNumber = ref("");
const roomStore = useRoomStore();
const userStore = useUserStore();

onMounted(() => {
  userStore.restorePlayerSession();
});

function updateRoomValue({ target }: Event) {
  roomNumber.value = ((target as any).value as string) || "";
}

function openRoom() {
  roomStore.openRoom(roomNumber.value);
}

function createRoom() {
  roomStore.createNewRoom();
}
</script>

<template>
  <div>
    {{ userStore.getUsername }}
  </div>
  <div class="room-form">
    <label>Room number:</label>
    <Input :value="roomNumber" @change="updateRoomValue" />
    <Button @click="openRoom">Open Room </Button>
    <Button @click="createRoom">Create Room </Button>
  </div>
</template>

<style scoped>
.room-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
