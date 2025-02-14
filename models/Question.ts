export interface QuestionsDTO {
  response_code: number;
  results: QuestionDTO[];
}

export interface QuestionDTO {
  category: string;
  type: TypeDTO;
  difficulty: DifficultyDTO;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export enum DifficultyDTO {
  Easy = "easy",
  Hard = "hard",
  Medium = "medium",
}

export enum TypeDTO {
  Boolean = "boolean",
  Multiple = "multiple",
}

export interface Answer {
  id: number;
  value: string;
  correct: boolean;
}

export interface Questions extends QuestionsDTO {}
export interface Question extends QuestionDTO {
  alreadyAnswered: boolean;
  answers: Answer[];
  id: number;
}
