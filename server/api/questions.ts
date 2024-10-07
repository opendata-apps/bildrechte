import { QuizQuestion } from '~/types/quiz'
import level1Questions from '~/assets/level1.json'
import level2Questions from '~/assets/level2.json'
import level3Questions from '~/assets/level3.json'

export default defineEventHandler((event) => {
    const query = getQuery(event)
    const level = parseInt(query.level as string)

    let questions: QuizQuestion[]

    switch (level) {
        case 1:
            questions = level1Questions as QuizQuestion[]
            break
        case 2:
            questions = level2Questions as QuizQuestion[]
            break
        case 3:
            questions = level3Questions as QuizQuestion[]
            break
        default:
            throw createError({
                statusCode: 400,
                statusMessage: 'Invalid level',
            })
    }

    return questions
})