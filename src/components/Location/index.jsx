import { Grid, Stack, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import React from "react";

const Location = ({
    userState,
    userState: { location, twitter_username, blog, company },
}) => {
    return (
        <Grid container spacing={2} sx={{marginTop: "15px"}}>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2}>
                    <LocationOnIcon color="primary"/>
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2}>
                    <TwitterIcon color="primary"/>
                    <Typography>
                        {twitter_username
                            ? `@${twitter_username}`
                            : "Not Available"}
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2}>
                    <LanguageIcon color="primary"/>
                    {(blog) ? <Link variant="body1" href={blog} target="_blank" rel="noreferrer" underline="hover">{blog}</Link> : <Typography>Not Available</Typography>}
                    
                </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2}>
                    <BusinessIcon color="primary"/>
                    <Typography>
                        {company ? company : "Not Available"}
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Location;
