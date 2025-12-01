<template>
  <div class="w-full max-w-4xl mx-auto">
    <!-- Loading State -->
    <Skeleton v-if="triviaStore.loading" />

    <!-- Game Complete -->
    <ScoreCard
      v-else-if="triviaStore.isGameComplete"
      :score="triviaStore.score"
      :total="triviaStore.totalQuestions"
      @restart="handleRestart"
      @home="handleHome"
    />

    <!-- Active Game -->
    <div v-else-if="triviaStore.currentQuestion">
      <QuestionCard
        :question="triviaStore.currentQuestion.question"
        :category="triviaStore.currentQuestion.category"
        :difficulty="triviaStore.currentQuestion.difficulty"
        :answers="triviaStore.currentQuestion.answers"
        :show-answer="showAnswer"
        :current-index="triviaStore.answeredQuestions"
        :total="triviaStore.totalQuestions"
        :score="triviaStore.score"
        :progress="triviaStore.progress"
        :selected-answer-id="selectedAnswerId"
        @select="handleAnswerSelect"
      />

      <!-- Action Buttons -->
      <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <Button
          v-if="!showAnswer"
          :disabled="selectedAnswerId === undefined"
          @click="handleRevealAnswer"
          variant="primary"
        >
          Reveal Answer
        </Button>
        <Button v-else @click="handleNextQuestion" variant="success">
          Next Question
        </Button>
      </div>
    </div>

    <!-- No questions (initial state) -->
    <Card v-else custom-class="text-center">
      <div class="text-6xl mb-4">🎮</div>
      <h2 class="text-3xl font-bold text-white mb-4">
        Welcome to Trivia Game!
      </h2>
      <p class="text-white/80 mb-6">
        Test your knowledge with fun trivia questions
      </p>
      <Button @click="handleStart" variant="primary"> Start Game </Button>
    </Card>
  </div>
</template>

<script setup lang="ts">
// Store - Using Nuxt auto-import (ensures proper Pinia initialization)
const triviaStore = useTriviaStore();

// Local UI state
const showAnswer = ref(false);
const selectedAnswerId = ref<number | undefined>(undefined);

// Lifecycle
onMounted(async () => {
  // Load questions on mount if not already loaded
  if (triviaStore.totalQuestions === 0) {
    await triviaStore.loadQuestions();
  }
});

// Event Handlers (Orchestration only)
async function handleStart() {
  await triviaStore.loadQuestions();
}

function handleAnswerSelect(answerId: number) {
  selectedAnswerId.value = answerId;
}

function handleRevealAnswer() {
  if (selectedAnswerId.value !== undefined) {
    triviaStore.answerQuestion(selectedAnswerId.value);
    showAnswer.value = true;
  }
}

function handleNextQuestion() {
  triviaStore.nextQuestion();
  showAnswer.value = false;
  selectedAnswerId.value = undefined;
}

async function handleRestart() {
  await triviaStore.restartGame();
  showAnswer.value = false;
  selectedAnswerId.value = undefined;
}

function handleHome() {
  triviaStore.resetGame();
  showAnswer.value = false;
  selectedAnswerId.value = undefined;
}
</script>
