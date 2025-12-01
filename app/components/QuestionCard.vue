<template>
  <div class="w-full max-w-2xl mx-auto">
    <Card :animated="true" custom-class="mb-4">
      <!-- Progress indicator -->
      <div class="mb-6">
        <div class="flex justify-between items-center mb-2">
          <span class="text-sm font-medium text-white/80">
            Question {{ currentIndex + 1 }} of {{ total }}
          </span>
          <span class="text-sm font-medium text-white/80">
            Score: {{ score }}
          </span>
        </div>
        <ProgressBar :progress="progress" />
      </div>

      <!-- Question -->
      <h2
        class="text-2xl md:text-3xl font-bold text-white mb-2 text-center leading-tight"
      >
        {{ question }}
      </h2>

      <!-- Category & Difficulty -->
      <div class="flex flex-wrap gap-2 justify-center mb-6">
        <span
          class="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white"
        >
          {{ category }}
        </span>
        <span
          :class="[
            'px-3 py-1 rounded-full text-xs font-medium',
            difficultyClass,
          ]"
        >
          {{ difficulty }}
        </span>
      </div>

      <!-- Answers Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        <Answer
          v-for="answer in answers"
          :key="answer.id"
          :answer="answer"
          :show-answer="showAnswer"
          :selected-id="selectedAnswerId"
          @select="handleSelect"
        />
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { Answer } from "~/types/trivia";

interface QuestionCardProps {
  question: string;
  category: string;
  difficulty: string;
  answers: Answer[];
  showAnswer: boolean;
  currentIndex: number;
  total: number;
  score: number;
  progress: number;
  selectedAnswerId?: number;
}

const props = defineProps<QuestionCardProps>();

interface Emits {
  select: [answerId: number];
}

const emit = defineEmits<Emits>();

const difficultyClass = computed(() => {
  switch (props.difficulty.toLowerCase()) {
    case "easy":
      return "bg-green-500/30 text-green-200";
    case "medium":
      return "bg-yellow-500/30 text-yellow-200";
    case "hard":
      return "bg-red-500/30 text-red-200";
    default:
      return "bg-blue-500/30 text-blue-200";
  }
});

function handleSelect(answerId: number) {
  if (!props.showAnswer) {
    emit("select", answerId);
  }
}
</script>
