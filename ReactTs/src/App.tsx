import Box from "./components/Box"

function App(){
  return (
    <>

      <div>
        <Box heading={"HELLO WORLD"} count={34} func1 = {(a:string) => alert(a)}/>
      </div>

    </>
  )
}

export default App