import { Avatar, Grid, Stack } from '@mui/material';
import ContactInfo from './CotactInfo';
import Description from './Description';

const UserCard = ({ userState, userState: { avatar_url } }) => {
    return (
        <Grid container spacing={2} sx={{ padding: '2rem' }}>
            <Grid item lg={3} md={5} xs={12}>
                <Avatar
                    alt="GitHub User Avatar"
                    src={avatar_url}
                    sx={{
                        width: { xs: '75%', md: '100%', lg: '100%' },
                        height: 'auto',
                        margin: 'auto',
                        border: '5px solid #005100',
                    }}
                />
            </Grid>
            <Grid item lg={9} md={7} xs={12}>
                <Stack direction="column" spacing={1} sx={{ margin: '20px' }}>
                    <ContactInfo userState={userState} />
                    <Description userState={userState} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default UserCard;
