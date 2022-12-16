import { Container } from "@mui/material"
import Search from "./components/Search"
import { useEffect, useState } from "react"
import { getData } from "./services/users"

function App() {

  const[userStarter, userState] = useState("userState")
  const[inputUser, setInputUser] = useState("octocat")

  const getUser = async (user) => {
    const userData = await getData(user)
    console.log(userData);
  }

  useEffect(() => {
    getUser(inputUser)
  },[])
  

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
