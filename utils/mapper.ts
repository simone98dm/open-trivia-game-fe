import type { QuestionsDTO, Question, Answer } from "~/models/Question";

export function mapToQuestions(data: QuestionsDTO) {
  return data.results.map(
    (question, i) =>
      ({
        ...question,
        id: i,
        question: decodeURIComponent(question.question),
        answers: mapToAnswer([
          question.correct_answer,
          ...question.incorrect_answers,
        ]),
        alreadyAnswered: false,
      } as Question)
  );
}

export function mapToAnswer(answers: string[]) {
  const array = answers.map(
    (a, i) =>
      ({
        value: decodeURIComponent(a),
        id: i,
        correct: i === 0,
      } as Answer)
  );
  return shuffleArray(array);
}

function shuffleArray(array: Answer[]) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
