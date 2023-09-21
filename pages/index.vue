<script setup lang="ts">
import { useTriviaStore } from "~/store/trivia";
import Answer from "~/components/Answer.vue";

const triviaStore = useTriviaStore();

triviaStore.fetchQuestions();

const showAnswer = ref(false);

function revealAnswer() {
  showAnswer.value = true;
}
function nextAnswer() {
  showAnswer.value = false;
  triviaStore.markAsCompleted();
}
</script>
<template>
  <div class="container" v-if="!triviaStore.loading">
    <div class="answers">
      <h1>
        {{ triviaStore.currentQuestion?.question }}
      </h1>
      <div class="answers-list">
        <Answer
          v-for="answer in triviaStore.currentQuestion?.answers"
          :key="answer.id"
          :answer="answer"
          :show-answer="showAnswer"
        />
      </div>
    </div>
    <div class="actions">
      <Button
        class="btn"
        :disabled="triviaStore.loading && showAnswer"
        @click="nextAnswer"
      >
        Next question
      </Button>
      <Button class="btn" :disabled="triviaStore.loading" @click="revealAnswer">
        Reveal answer
      </Button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.answers-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
