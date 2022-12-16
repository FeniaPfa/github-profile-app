import { Container } from "@mui/material"
import Search from "./components/Search"
import { useState } from "react"

function App() {

  const[userStarter, userState] = useState("octocat")
  const[inputUser, setInputUser] = useState("userState")
  

  return (
    <div className="App">
      <Container sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'

      }}>
        <Search inputUser={inputUser} setInputUser={setInputUser}/>
        
      </Container>
    </div>
  )
}

export default App
