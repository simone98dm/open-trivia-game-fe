<script setup lang="ts">
import { useTriviaStore } from "~/store/trivia";
import { useRoomStore } from "~/store/room";

const triviaStore = useTriviaStore();
const roomStore = useRoomStore();
const showAnswer = ref(false);

triviaStore.fetchQuestions();

function revealAnswer() {
  showAnswer.value = true;
}

function nextAnswer() {
  showAnswer.value = false;
  triviaStore.markAsCompleted();
}

function selectAnswer(answer: any) {
  console.log(answer);
}
</script>
<template>
  <Skeleton v-if="triviaStore.loading" />
  <div class="container" v-else>
    <PlayerList :players="roomStore.players" />
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
          @click="() => selectAnswer(answer)"
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
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.answers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.answers-list {
  display: flex;
  flex-direction: column;
}
.actions {
  gap: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 32px;
}

@media only screen and (min-width: 992px) {
  .answers h1 {
    font-weight: 700;
    font-size: 32px;
  }
  .actions {
    flex-direction: row;
  }
}
</style>
