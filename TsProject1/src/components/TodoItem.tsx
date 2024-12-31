import { Paper, Typography, Checkbox, Button, Stack, TextField} from "@mui/material"
import { useState } from "react"

type PropsType = {
    todo: TodoItemType
    deleteHandler: (id: TodoItemType["id"]) => void //or simply id: string
    completeHandler: (id: TodoItemType["id"]) => void
    updateHandler: (id: TodoItemType["id"], newTitle: TodoItemType["title"]) => void
}
const TodoItem = ({todo, completeHandler, deleteHandler, updateHandler} : PropsType) => {
const [editActive, setEditActive] = useState<boolean>(false)
const [textVal, setTextVal] = useState<string>(todo.title)
    return <Paper sx = {{
    padding: "1rem"
  }}>

  <Stack direction={"row"} alignItems = {"center"}>
    {
        editActive ? 
        (
        <TextField value={textVal} onChange={(e) => setTextVal(e.target.value)} onKeyDown = {(e) => {
            if(e.key === "Enter" && textVal !== ""){
              updateHandler(todo.id, textVal)
              setEditActive(false)
            }
          }}/>
        ) 
        : 
        (
            <Typography marginRight={"auto"}>
                {todo.title}
            </Typography>
        )
    }
    <Checkbox checked = {todo.isCompleted} onChange={() => completeHandler(todo.id)}/>
    <Button
    onClick={() => setEditActive(prev => !prev)}
    >
        { editActive ? "Done" : "Edit" }
    </Button>
    <Button onClick={() => deleteHandler(todo.id)}>Delete</Button>
  </Stack>
  </Paper>
}

export default TodoItem
