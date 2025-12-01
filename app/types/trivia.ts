// DTO types from API
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

// Domain models
export interface Answer {
  id: number;
  value: string;
  correct: boolean;
}

export interface Question {
  id: number;
  category: string;
  type: TypeDTO;
  difficulty: DifficultyDTO;
  question: string;
  answers: Answer[];
  alreadyAnswered: boolean;
}

// API request/response types
export interface FetchQuestionsParams {
  amount?: number;
  category?: number;
  difficulty?: DifficultyDTO;
  type?: TypeDTO;
}
