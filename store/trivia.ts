import { defineStore } from "pinia";
import type { Question, QuestionsDTO } from "~/models/Question";

export const useTriviaStore = defineStore("trivia", {
  state: () => ({
    questions: [] as Question[],
    currentQuestion: undefined as Question | undefined,
    loading: false,
  }),
  actions: {
    async fetchQuestions() {
      this.loading = true;
      const response = await fetch(`${BASE_URL}${API_PATH}`)
        .then((data) => data.json())
        .finally(() => (this.loading = false));

      if (!response) {
        return;
      }

      this.questions = mapToQuestions(response as QuestionsDTO);
      this.currentQuestion = this.questions[0];
    },
    markAsCompleted() {
      this.questions = this.questions.map((question) => {
        if (question.id === this.currentQuestion?.id) {
          return {
            ...question,
            alreadyAnswered: true,
          };
        }
        return {
          ...question,
        };
      });

      const nextQuestion = this.questions.filter(
        (q) => q.alreadyAnswered === false
      );
      if (nextQuestion.length > 0) {
        this.currentQuestion = nextQuestion[0];
      } else {
        this.fetchQuestions();
      }
    },
  },
});
