<template>
  <Card :animated="true" custom-class="text-center">
    <div class="mb-6">
      <div class="text-6xl md:text-8xl mb-2">
        {{ emoji }}
      </div>
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
        {{ title }}
      </h2>
      <p class="text-lg text-white/80">
        {{ message }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
      <div class="glass-strong rounded-xl p-4">
        <div class="text-3xl font-bold text-white mb-1">
          {{ score }}
        </div>
        <div class="text-sm text-white/70">Correct</div>
      </div>
      <div class="glass-strong rounded-xl p-4">
        <div class="text-3xl font-bold text-white mb-1">
          {{ total }}
        </div>
        <div class="text-sm text-white/70">Total</div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 justify-center">
      <Button @click="$emit('restart')" variant="primary"> Play Again </Button>
      <Button @click="$emit('home')" variant="secondary"> Home </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
interface ScoreCardProps {
  score: number;
  total: number;
}

const props = defineProps<ScoreCardProps>();

interface Emits {
  restart: [];
  home: [];
}

defineEmits<Emits>();

const percentage = computed(() => (props.score / props.total) * 100);

const emoji = computed(() => {
  if (percentage.value === 100) return "🏆";
  if (percentage.value >= 80) return "🎉";
  if (percentage.value >= 60) return "😊";
  if (percentage.value >= 40) return "🙂";
  return "📚";
});

const title = computed(() => {
  if (percentage.value === 100) return "Perfect!";
  if (percentage.value >= 80) return "Excellent!";
  if (percentage.value >= 60) return "Good Job!";
  if (percentage.value >= 40) return "Not Bad!";
  return "Keep Learning!";
});

const message = computed(() => {
  if (percentage.value === 100) return "You got every question right!";
  if (percentage.value >= 80) return "Outstanding performance!";
  if (percentage.value >= 60) return "You did well!";
  if (percentage.value >= 40) return "Room for improvement!";
  return "Practice makes perfect!";
});
</script>
