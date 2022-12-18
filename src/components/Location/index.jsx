import { Grid, Stack, Typography } from "@mui/material";
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
        <Grid container>
            <Grid item xs={6}>
                <Stack direction="row">
                    <LocationOnIcon />
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row">
                  <TwitterIcon />
                  <Typography>{(twitter_username) ? `@${twitter_username}` : "Not Available"}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row">
                  <BusinessIcon />
                  <Typography>{(company) ? company : "Not Available"}</Typography>
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction="row">
                  <LanguageIcon />
                  <Typography>{(blog) ? blog : "Not Available"}</Typography>
                </Stack>
            </Grid>
        </Grid>
    );
};

export default Location;
