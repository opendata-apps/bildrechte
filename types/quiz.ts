// types/quiz.ts
export interface QuizQuestion {
    type: string;
    image: string;
    alt: string;
    source: string;
    author: string;
    last_visited: string;
    questions: string;
    answers: Record<string, string>;
    given_answer: string;
    correct_answer: string;
    solution: string;
    help_query?: string;
    help_answer?: string;
}

export interface QuizLevel {
    questions: QuizQuestion[];
    currentQuestionIndex: number;
    score: number;
}

export interface QuizState {
    level1: QuizLevel;
    level2: QuizLevel;
    level3: QuizLevel;
    currentLevel: number;
}