export interface Option {
  id: string; // 'A', 'B', 'C', 'D', 'E'
  text: string;
}

export interface Question {
  id: number;
  text: string;
  instruction: string; // e.g., "Choose 1 answer"
  options: Option[];
  correctAnswers: string[]; // e.g., ['A', 'C']
}

export interface UserAnswers {
  [questionId: number]: string[];
}