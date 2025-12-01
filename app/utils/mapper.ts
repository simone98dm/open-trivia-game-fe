import type { QuestionsDTO, Question, Answer } from "~/types/trivia";

/**
 * Maps API DTO to domain Question models
 * Includes answer shuffling and URL decoding
 */
export function mapToQuestions(data: QuestionsDTO): Question[] {
  return data.results.map((question, i) => ({
    id: i,
    category: decodeURIComponent(question.category),
    type: question.type,
    difficulty: question.difficulty,
    question: decodeURIComponent(question.question),
    answers: mapToAnswer([
      question.correct_answer,
      ...question.incorrect_answers,
    ]),
    alreadyAnswered: false,
  }));
}

/**
 * Maps answer strings to Answer objects
 * First answer is always correct, then shuffles
 */
export function mapToAnswer(answers: string[]): Answer[] {
  const array = answers.map((a, i) => ({
    value: decodeURIComponent(a),
    id: i,
    correct: i === 0,
  }));
  return shuffleArray(array);
}

/**
 * Fisher-Yates shuffle algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i]!;
    result[i] = result[j]!;
    result[j] = temp;
  }
  return result;
}
