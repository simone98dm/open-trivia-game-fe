import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Question, FetchQuestionsParams } from "~/types/trivia";
import { useTriviaApi } from "~/composables/useTriviaApi";

export const useTriviaStore = defineStore("trivia", () => {
  // State
  const questions = ref<Question[]>([]);
  const currentQuestionIndex = ref(0);
  const loading = ref(false);
  const score = ref(0);
  const answeredQuestions = ref(0);

  // Composables
  const triviaApi = useTriviaApi();

  // Computed
  const currentQuestion = computed(
    () => questions.value[currentQuestionIndex.value]
  );
  const totalQuestions = computed(() => questions.value.length);
  const progress = computed(() =>
    totalQuestions.value > 0
      ? (answeredQuestions.value / totalQuestions.value) * 100
      : 0
  );
  const isGameComplete = computed(
    () =>
      answeredQuestions.value >= totalQuestions.value &&
      totalQuestions.value > 0
  );

  // Actions
  async function loadQuestions(
    params?: FetchQuestionsParams
  ): Promise<boolean> {
    loading.value = true;

    try {
      const data = await triviaApi.fetchQuestions(params);

      if (!data || data.length === 0) {
        notifyError("Failed to load questions. Please try again.");
        return false;
      }

      questions.value = data;
      currentQuestionIndex.value = 0;
      answeredQuestions.value = 0;
      score.value = 0;

      return true;
    } catch (err) {
      notifyError("An error occurred while loading questions.");
      return false;
    } finally {
      loading.value = false;
    }
  }

  function answerQuestion(answerId: number) {
    const question = currentQuestion.value;
    if (!question) return;

    const selectedAnswer = question.answers.find((a) => a.id === answerId);
    if (selectedAnswer?.correct) {
      score.value++;
    }
  }

  function nextQuestion() {
    answeredQuestions.value++;

    if (currentQuestionIndex.value < questions.value.length - 1) {
      currentQuestionIndex.value++;
    } else {
      // Game complete, could trigger end game logic
    }
  }

  async function restartGame() {
    await loadQuestions();
  }

  function resetGame() {
    questions.value = [];
    currentQuestionIndex.value = 0;
    loading.value = false;
    score.value = 0;
    answeredQuestions.value = 0;
  }

  return {
    // State
    questions,
    currentQuestion,
    loading,
    score,
    answeredQuestions,
    totalQuestions,
    progress,
    isGameComplete,

    // Actions
    loadQuestions,
    answerQuestion,
    nextQuestion,
    restartGame,
    resetGame,
  };
});
