import { IconButton, Stack, TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function Search({ setInputUser }) {

    const [valueInput, setValueInput] = useState('')

    const onSearchValueChange = (e) =>{
        const inputValue = e.target.value
        setValueInput(inputValue)
        // console.log(valueInput);
    }

    const handleSearch = () => {
        setInputUser(valueInput)
        
    };
    
    return (
        <Stack
            direction="row"
            sx={{
                marginTop: "30px",
                width: "80%",
            }}
        >
            <TextField
                onChange={onSearchValueChange}
                id="outlined-basic"
                placeholder="Octocat"
                // defaultValue="Octocat"
                value={valueInput}
                label="Github User"
                variant="outlined"
                size="small"
                sx={{
                    width: "90%",
                    margin: "0 auto",
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon sx={{
                                cursor: "pointer"
                            }} onClick={handleSearch}/>
                        </InputAdornment>
                    ),
                }}
            />
            
        </Stack>
    );
}

export default Search;
