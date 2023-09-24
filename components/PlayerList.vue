<script setup lang="ts">
import { Player } from "~/models/Player";

interface PlayerListProps {
  players: Player[];
}

defineProps<PlayerListProps>();
</script>

<template>
  <h1>player list:</h1>
  <span v-for="player in players">{{ player.displayName }}</span>
</template>
