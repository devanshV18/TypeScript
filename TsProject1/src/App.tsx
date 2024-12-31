import { AppBar, Container, Toolbar, Typography, Stack, TextField, Button } from "@mui/material"
import TodoItem from "./components/TodoItem"
import { useEffect, useState } from "react"

const App = () => {

  const saveTodos = (todos: TodoItemType[]) => {
    localStorage.setItem("mytodos", JSON.stringify(todos))
  }

  const getTodos = (): TodoItemType[] => {
    const todos = localStorage.getItem("mytodos")
    return todos ? JSON.parse(todos) : []
  }

  const [title, setTitle] = useState<TodoItemType["title"]>("")
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos())
  
  const completeHandler = (id:TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.isCompleted = !i.isCompleted
      return i
    })
    setTodos(newTodos)
  }
  const deleteHandler = (id:TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((i) => i.id !== id)
    setTodos(newTodos)
  }

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      title: title,
      isCompleted: false,
      id: String(Math.random()*1000)
    }

    setTodos(prev => ([...prev, newTodo]))
    setTitle("")
  }

  const updateHandler = (id: TodoItemType["id"], newTitle: TodoItemType["title"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.title = newTitle
      return i
    })
    setTodos(newTodos)
  }

  useEffect(() => {
    saveTodos(todos)
  }, [todos])

  return <Container maxWidth="sm"> 
    <AppBar position="static">
      <Toolbar>
        <Typography>
           Todo App
        </Typography>
      </Toolbar>
    </AppBar>

    <Stack direction={"column"} spacing={"1rem"} p={"1rem"}>
      {todos.map((i) => (
        <TodoItem completeHandler = {completeHandler} deleteHandler = {deleteHandler} key={i.id} todo={i} updateHandler={updateHandler} />
      ))}
    </Stack>

    <TextField 
    value={title} 
    onChange = {(e) => setTitle(e.target.value)} 
    fullWidth label = { "New task" }
    onKeyDown = {(e) => {
      if(e.key === "Enter" && title !== ""){
        submitHandler()
      }
    }}
    />

    <Button 
    fullWidth 
    variant="contained" sx = {{margin: "1rem 0"}}
    onClick={submitHandler}
    disabled = {title === ""}
    >
      Add
    </Button>
  </Container>
}

export default App
