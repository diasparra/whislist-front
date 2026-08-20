import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { faker } from '@faker-js/faker'

const __dirname = dirname(fileURLToPath(import.meta.url))

function parseArgs(argv) {
  const args = { count: 10, out: null, format: 'db' }
  const positional = []
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--out') args.out = argv[++i]
    else if (argv[i] === '--format') args.format = argv[++i]
    else positional.push(argv[i])
  }
  if (positional[0] !== undefined) {
    args.count = Number(positional[0]) || args.count
  }
  return args
}

const { count: TODO_COUNT, out, format } = parseArgs(process.argv.slice(2))

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

const payload =
  format === 'array'
    ? todos
    : { todos, $schema: './node_modules/json-server/schema.json' }

const outputPath = out
  ? resolve(process.cwd(), out)
  : resolve(__dirname, '..', 'db.json')

writeFileSync(outputPath, JSON.stringify(payload, null, 2) + '\n')

console.log(`Generated ${TODO_COUNT} todos (${format}) in ${outputPath}`)
