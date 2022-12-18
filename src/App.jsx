import { Container } from "@mui/material"
import Search from "./components/Search"
import { useEffect, useState } from "react"
import { getData } from "./services/users"
import UserCard from "./components/UserCard"

function App() {

  const [inputUser, setInputUser] = useState("octocat")
  const [userState, setUserState] = useState("inputUser")
  const [notFound, setNotFound] = useState(false)

  const getUser = async (user) => {
    const userData = await getData(user)

    if(userState === "octocat"){
      localStorage.setItem("octocat", userData)
    }

    if(userData.message === "Not Found"){
      const {octocat} = localStorage
      setInputUser(octocat)
      setNotFound(true)
    } else {
      setUserState(userData)
    }

  }
  console.log(userState);


  useEffect(() => {
    getUser(inputUser)
  },[inputUser])
  

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
        <UserCard userState={userState}/>
      </Container>
    </div>
  )
}

export default App
