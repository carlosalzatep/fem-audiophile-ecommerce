import { db } from '~~/server/db'

export default defineEventHandler(async (e) => {
  const { categoryName = null } = e.context.params
  const filteredProducts = db.products
    .filter((item) => item.category === categoryName)
    // order new products as first items
    .sort((product1, product2) => Number(product2.new) - Number(product1.new))

  if (filteredProducts?.length === 0) {
    const validationError = createError({
      statusCode: 404,
      statusMessage: 'No data was found for this Category',
    })
    sendError(e, validationError)
  }
  return filteredProducts
})
