import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MainInfo = ({ userState, userState: { name, login, created_at } }) => {
    return (
        <>
            <Stack>
                <Typography>{name}</Typography>
                <Typography>{created_at}</Typography>
            </Stack>
            <Typography>{login}</Typography>
        </>
    );
};

export default MainInfo;
