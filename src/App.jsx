import { Container } from '@mui/material';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { getData } from './services/users';
import UserCard from './components/UserCard';

function App() {
    const [inputUser, setInputUser] = useState('octocat');
    const [userState, setUserState] = useState('');
    const [notFound, setNotFound] = useState(false);

    const getUser = async (user) => {
        const userData = await getData(user);
        if (inputUser === 'octocat') {
            localStorage.setItem('octocat', JSON.stringify(userData));
        }

        if (userData === 'Error') {
            const storedUser = localStorage.getItem('octocat');
            const parsedUser = JSON.parse(storedUser);
            setUserState(parsedUser);
            setNotFound(true);
        } else {
            setUserState(userData);
            setNotFound(false);
            console.log(userData);
        }
    };
    useEffect(() => {
        getUser(inputUser);
    }, [inputUser]);

    return (
        <div className="App">
            <Container
                sx={{
                    background: 'whitesmoke',
                    width: '80vw',
                    height: { xs: '100%', md: '500px', lg: '500px' },
                    borderRadius: '16px',
                    marginTop: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '4px 8px 19px -3px #00000036',
                }}>
                <Search inputUser={inputUser} setInputUser={setInputUser} notFound={notFound} />
                <UserCard userState={userState} />
            </Container>
        </div>
    );
}

export default App;
