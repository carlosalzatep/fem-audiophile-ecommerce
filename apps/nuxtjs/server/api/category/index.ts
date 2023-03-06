import { db } from '~~/server/db'

export default defineEventHandler(async (e) => {
  switch (e.req.method) {
    case 'GET':
      return db.products
    // case 'POST':
    // ...
  }
})
