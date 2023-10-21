import { Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function SearchInput({ setInputUser, notFound }) {
    const [valueInput, setValueInput] = useState('');

    const onSearchValueChange = (e) => {
        const inputValue = e.target.value;
        setValueInput(inputValue);
    };

    const handleSearch = () => {
        setInputUser(valueInput);
    };
    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            handleSearch();
        }
    };

    return (
        <Stack
            direction="row"
            sx={{
                marginTop: '30px',
                width: '80%',
            }}>
            <TextField
                error={notFound}
                label="Github User"
                placeholder="Octocat"
                // value={valueInput}
                variant="outlined"
                size="medium"
                onKeyDown={handleEnter}
                onChange={onSearchValueChange}
                sx={{
                    width: '90%',
                    margin: '0 auto',
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon
                                sx={{
                                    cursor: 'pointer',
                                }}
                                onClick={handleSearch}
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </Stack>
    );
}

export default SearchInput;
