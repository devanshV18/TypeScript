import { Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"



const languages: langType[] = [
    {
        name: "Japanese",
        code: "ja"
    },
    {
        name: "Hindi",
        code: "hi"
    },
    {
        name: "Spanish",
        code: "es"
    },
    {
        name: "French",
        code: "fr"
    }
]

const Home = () => {

    const naviage = useNavigate()

    const languageSelectHandler = (language: string):void => {
        naviage(`/learn?language=${language}`)
    }

  return (
    <Container maxWidth={"sm"}>
        <Typography variant="h3" p={"2rem"} textAlign={"center"}>
            Welcome, Begin your Journey of Learning
        </Typography>

        <Stack
            direction={"row"}
            spacing={"2rem"}
            alignItems={"center"}
            justifyContent={"center"}
        >   
            {
                languages.map((i => (
                    <Button onClick={() => languageSelectHandler(i.code)} key={i.code} variant = "contained">
                        {i.name}
                    </Button>
                )))
            }
        </Stack>

        <Typography textAlign={"center"} >Choose one language to learn</Typography>
    </Container>
  )
}

export default Home
