import { Link, Typography, Stack } from '@mui/material';

const ContactInfo = ({ userState: { name, login, created_at, html_url } }) => {
    return (
        <>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h4">{name}</Typography>
                <Typography variant="subtitle2">
                    {new Date(created_at).toLocaleDateString('en-us')}
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

export default ContactInfo;
