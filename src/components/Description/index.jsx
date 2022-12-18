import { Typography, Stack } from "@mui/material";
import React from "react";
import Location from "../Location";
import PaperInfo from "../PaperInfo";

const Description = ({ userState, userState: { bio } }) => {
    return (
        <>
            <Stack sx={{ justifyContent: "center" }}>
                <Typography variant="body1">
                    {!bio ? "lorem ipsum dolor sit amet" : bio}
                </Typography>
            </Stack>
            <PaperInfo userState={userState} />
            <Location userState={userState} />
        </>
    );
};

export default Description;
