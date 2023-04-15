import { Box, Paper, Stack, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import React from 'react';

const PaperInfo = ({ userState: { public_repos, followers, following } }) => {
    return (
        <Paper elevation={3}>
            <Stack
                direction="row"
                spacing={3}
                sx={{ justifyContent: 'space-evenly', margin: '20px' }}>
                <Stack direction="row" gap="1rem" alignItems="center">
                    <LibraryBooksIcon fontSize="large" />
                    <Stack>
                        <Typography fontWeight="bold" variant="body1">Repos</Typography>
                        <Typography variant="h6">{public_repos}</Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" gap="1rem" alignItems="center">
                    <GroupIcon fontSize="large" />
                    <Stack>
                        <Typography fontWeight="bold" variant="body1">Followers</Typography>
                        <Typography variant="h6">{followers}</Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" gap="1rem" alignItems="center">
                    <GroupAddIcon fontSize="large" />

                    <Stack>
                        <Typography fontWeight="bold" variant="body1">Following</Typography>
                        <Typography variant="h6">{following}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default PaperInfo;
