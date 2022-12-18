import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const PaperInfo = ({ userState: { public_repos, followers, following } }) => {
    return (
        <Paper elevation={3}>
            <Stack
                direction="row"
                spacing={3}
                sx={{ justifyContent: "space-evenly", margin: "20px" }}
            >
                <Stack>
                    <Typography variant="body1">Repos</Typography>
                    <Typography variant="h6">{public_repos}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="body1">Followers</Typography>
                    <Typography variant="h6">{followers}</Typography>
                </Stack>
                <Stack>
                    <Typography variant="body1">Following</Typography>
                    <Typography variant="h6">{following}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default PaperInfo;
