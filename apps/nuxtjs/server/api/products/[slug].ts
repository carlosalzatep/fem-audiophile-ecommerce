import { db } from '~~/server/db'

export default defineEventHandler(async (e) => {
  const { slug = null } = e.context.params
  const [firstProductFound] = db.products.filter(
    (item) => item.slug === slug || item.id == slug
  )
  if (!firstProductFound) {
    const validationError = createError({
      statusCode: 404,
      statusMessage: 'No data was found for this Product',
    })
    sendError(e, validationError)
  }
  return firstProductFound
})
