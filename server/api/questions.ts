import { defineEventHandler } from 'h3'
import level1 from '~/assets/data/level1.json'
import level2 from '~/assets/data/level2.json'
import level3 from '~/assets/data/level3.json'

const levels = {
  1: level1,
  2: level2,
  3: level3
}

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const level = parseInt(query.level as string) || 1

  if (level in levels) {
    return levels[level as keyof typeof levels]
  } else {
    throw createError({
      statusCode: 404,
      statusMessage: 'Level not found',
    })
  }
})