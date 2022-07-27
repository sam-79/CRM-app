import React from 'react';

import { Box, Paper, Divider, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { FormHeading } from "../ModifiedElements";

function ContactSource() {
    return (

        <Paper varient="outlined" square >
            <Box>
                <FormHeading>
                    CONTACT SOURCE
                </FormHeading>
                <Divider />

                <Box sx={{
                    paddingX:1
                }}>

                    <FormGroup>

                        {
                            ["FILE_UPLOAD", "WALK_IN_LEAD", "INCOMING_IVR", "HOME_ONLINE", "TELECOM", "FACEBOOK_ADS", "NINETY_NINE_ACRES", "MAGIC_BRICKS", "CUSTOM_INTEGRATION", "HOUSING"]
                                .map((data, index) => {
                                    return (
                                        <FormControlLabel control={<Checkbox />} label={data} value={data} />
                                    )
                                })
                        }
                    </FormGroup>
                </Box>
            </Box>

        </Paper>
    )
}

export default ContactSource