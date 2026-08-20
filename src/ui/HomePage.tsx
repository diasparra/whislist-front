import { Fragment, type SubmitEvent, useMemo } from 'react'
import AppBox from '../components/AppBox.tsx'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
} from '@mui/material'
import AppDatePicker from '../components/AppDatePicker.tsx'
import AppTitle from '../components/AppTitle.tsx'
import AppList, { type AppListItem } from '../components/AppList.tsx'
import { useTodos } from '../contexts/TodoContext'
import TodoTitle from './components/TodoTitle.tsx'
import TodoChecked from './components/TodoChecked.tsx'

function HomePage() {
  const { todos, addTodo, checkTodo, isPending } = useTodos()

  const items = useMemo(() => {
    const array: AppListItem[] = []
    todos.forEach((todo) => {
      array.push({
        id: todo.id,
        title: <TodoTitle item={todo} />,
        icon: <TodoChecked item={todo} />,
        onClick: (id) => checkTodo({ id, checked: !todo.checked }),
      })
    })

    return array
  }, [checkTodo, todos])

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    addTodo(formData)
    event.currentTarget.reset()
  }

  return (
    <Fragment>
      <AppBox
        component="section"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <form onSubmit={handleSubmit}>
            <Stack component={CardContent} spacing={2}>
              <AppTitle value="Add new task" type="subtitle" />
              <TextField id="title" name="title" label="Title" />
              <AppDatePicker id="date" name="date" label="Due date" />
            </Stack>

            <Stack
              component={CardActions}
              direction={'row'}
              spacing={2}
              sx={{ justifyContent: 'center' }}
            >
              <Button variant="contained" type="submit" disabled={isPending}>
                {'Add Todo'}
              </Button>
              <Button variant="outlined" type="reset" disabled={isPending}>
                {'Reset'}
              </Button>
            </Stack>
          </form>
        </Card>

        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Stack component={CardContent} spacing={2}>
            <AppTitle value="Tasks" type="subtitle" />
            <AppList items={items} />
          </Stack>
        </Card>
      </AppBox>
    </Fragment>
  )
}

export default HomePage
