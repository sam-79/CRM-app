//Add Contact basic details form (dd4) Contacts

import React from 'react';
import { Paper, Divider, Box, Grid} from '@mui/material';

import { FormHeading, InputTextField } from '../ModifiedElements';





function ContactDetails() {
    return (
        <Paper varient="outlined" square>

            <FormHeading varient="h2">
                BASIC DETAILS
            </FormHeading>

            <Divider />

            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {
                        [{ "label": "Contact Name", "type": "text" },
                        { "label": "Contact Number", "type": "number" },
                        { "label": "Loan Id", "type": "text" },
                        { "label": "City", "type": "text" },
                        { "label": "College", "type": "text" },
                        { "label": "State", "type": "text" },
                        { "label": "Course", "type": "text" },
                        { "label": "Year", "type": "text" }].map((data, index) => {
                            return (
                                <Grid item xs={6}>
                                    <InputTextField id={`${data.label}.${index}`} label={data.label} type={data.type} variant="outlined" />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Box>


        </Paper>

        
    )
}

export default ContactDetails