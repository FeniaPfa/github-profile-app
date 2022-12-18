import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MainInfo = ({ userState, userState: { name, login, created_at } }) => {
    return (
        <>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle2">{new Date(created_at).toLocaleDateString('en-us')}</Typography>
            </Stack>
            <Typography variant="caption">@{login}</Typography>
        </>
    );
};

export default MainInfo;
