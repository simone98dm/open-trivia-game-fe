import type {
  QuestionsDTO,
  Question,
  FetchQuestionsParams,
} from "~/types/trivia";
import { mapToQuestions } from "~/utils/mapper";

export const useTriviaApi = () => {
  const BASE_URL = "https://opentdb.com";

  async function fetchQuestions(
    params: FetchQuestionsParams = {}
  ): Promise<Question[] | null> {
    try {
      const {
        amount = 20,
        category = 9,
        difficulty,
        type = "multiple",
      } = params;

      const queryParams = new URLSearchParams({
        amount: amount.toString(),
        category: category.toString(),
        encode: "url3986",
        type,
      });

      if (difficulty) {
        queryParams.append("difficulty", difficulty);
      }

      const response = await $fetch<QuestionsDTO>(
        `${BASE_URL}/api.php?${queryParams.toString()}`
      );

      if (!response || response.response_code !== 0) {
        return null;
      }

      // Map DTO to domain model
      return mapToQuestions(response);
    } catch (error) {
      return null;
    }
  }

  return {
    fetchQuestions,
  };
};
