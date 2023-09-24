<script setup lang="ts">
import { Answer } from "~/models/Question";

interface AnswerProps {
  answer: Answer;
  showAnswer: boolean;
}

const props = defineProps<AnswerProps>();

const parseColor = computed(() => {
  const match = props.answer.id.match(/(\d+)/);
  const map = ["blue", "orange", "red", "green"];
  if (match) {
    const index = match[0] as unknown as number;
    return map[index];
  }
  return "default";
});
</script>

<template>
  <Button
    :color="parseColor"
    :class="[
      'answer',
      {
        correct: showAnswer && answer.correct,
        incorrect: showAnswer && !answer.correct,
      },
    ]"
  >
    {{ answer.value }}
  </Button>
</template>

<style scoped>
.answer {
  margin: 8px;
  padding: 16px 32px;
  border-radius: 24px;
  font-size: 18px;
}
.correct {
  color: green;
  background-color: #eeeeee;
}
.incorrect {
  color: red;
  background-color: #eeeeee;
}
.a-0 {
  background-color: #0000ff;
  color: white;
}
.a-1 {
  background-color: #ff0000;
  color: white;
}
.a-2 {
  background-color: #008000;
  color: white;
}
.a-3 {
  background-color: #ffa500;
  color: white;
}
</style>
