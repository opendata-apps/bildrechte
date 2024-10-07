// composables/useQuiz.ts
import type { QuizState, QuizQuestion } from '~/types/quiz'

export const useQuiz = () => {
    const state = reactive<QuizState>({
        level1: { questions: [], currentQuestionIndex: 0, score: 0 },
        level2: { questions: [], currentQuestionIndex: 0, score: 0 },
        level3: { questions: [], currentQuestionIndex: 0, score: 0 },
        currentLevel: 1
    })

    const loadQuestions = async (level: number) => {
        const response = await fetch(`/api/questions?level=${level}`)
        const questions: QuizQuestion[] = await response.json()
        const levelKey = `level${level}` as keyof QuizState
        if (typeof state[levelKey] !== 'number') {
            state[levelKey].questions = questions
        }
    }

    const answerQuestion = (answer: string) => {
        const currentLevel = `level${state.currentLevel}` as keyof QuizState
        const currentLevelState = state[currentLevel]
        if (typeof currentLevelState !== 'number') {
            const currentQuestion = currentLevelState.questions[currentLevelState.currentQuestionIndex]

            if (currentQuestion) {
                currentQuestion.given_answer = answer
                if (answer === currentQuestion.correct_answer) {
                    currentLevelState.score++
                }

                currentLevelState.currentQuestionIndex++
            }
        }
    }

    const nextLevel = () => {
        if (state.currentLevel < 3) {
            state.currentLevel++
            loadQuestions(state.currentLevel)
        }
    }

    return {
        state,
        loadQuestions,
        answerQuestion,
        nextLevel
    }
}