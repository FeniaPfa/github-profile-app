import { useState } from 'react';
import { useUser } from './hooks/useUser';
import { Container } from '@mui/material';
import { SearchInput, UserCard } from './components';

function App() {
    const [inputUser, setInputUser] = useState('octocat');

    const { userData, notFound } = useUser(inputUser);

    return (
        <div className="App">
            <Container
                maxWidth="md"
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
                <SearchInput
                    inputUser={inputUser}
                    setInputUser={setInputUser}
                    notFound={notFound}
                />
                <UserCard userState={userData} />
            </Container>
        </div>
    );
}

export default App;
