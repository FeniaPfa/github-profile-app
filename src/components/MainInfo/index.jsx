import { Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const MainInfo = ({ userState: { name, login, created_at, html_url } }) => {
    return (
        <>
            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle2">
                    {new Date(created_at).toLocaleDateString("en-us")}
                </Typography>
            </Stack>
            <Typography fontWeight="bold">
                <Link href={html_url} underline="none" fontSize="medium">
                @{login}
                </Link>
                </Typography>
        </>
    );
};

export default MainInfo;
