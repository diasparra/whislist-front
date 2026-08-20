import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { faker } from '@faker-js/faker'

const __dirname = dirname(fileURLToPath(import.meta.url))

const TODO_COUNT = Number(process.argv[2]) || 10

const formatDate = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${month}/${day}/${date.getFullYear()}`
}

const todos = Array.from({ length: TODO_COUNT }, () => ({
  id: faker.string.nanoid(),
  title: faker.hacker.phrase(),
  date: formatDate(faker.date.anytime()),
  checked: faker.datatype.boolean(),
}))

const db = {
  todos,
  $schema: './node_modules/json-server/schema.json',
}

const outputPath = resolve(__dirname, '..', 'db.json')
writeFileSync(outputPath, JSON.stringify(db, null, 2) + '\n')

console.log(`Generated ${TODO_COUNT} todos in ${outputPath}`)
