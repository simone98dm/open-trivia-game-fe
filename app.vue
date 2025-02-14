<template>
  <NuxtLayout>
    <Skeleton v-if="loading" />
    <div class="p-6" v-else>
      <div class="answers">
        <h1
          class="text-2xl font-bold md:text-4xl dark:text-gray-50 text-gray-800"
        >
          {{ currentQuestion?.question }}
        </h1>
        <div class="answers-list">
          <Answer
            v-for="answer in currentQuestion?.answers"
            :key="answer.id"
            :answer="answer"
            :show-answer="showAnswer"
          />
        </div>
      </div>
      <div class="actions">
        <Button :disable="!showAnswer" @click="nextAnswer">
          Next question
        </Button>
        <Button :disable="showAnswer" @click="revealAnswer">
          Reveal answer
        </Button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTriviaStore } from "~/store/trivia";
import Answer from "~/components/Answer.vue";
import { storeToRefs } from "pinia";
import { NuxtLayout } from "#components";

const triviaStore = useTriviaStore();
const { currentQuestion, loading } = storeToRefs(triviaStore);
const showAnswer = ref(false);

onMounted(async () => {
  await triviaStore.fetchQuestions();
});

function revealAnswer() {
  showAnswer.value = true;
}

function nextAnswer() {
  showAnswer.value = false;
  triviaStore.markAsCompleted();
}
</script>

<style scoped>
.answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

.answers-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
