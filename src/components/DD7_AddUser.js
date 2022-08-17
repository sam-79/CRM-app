import React from 'react'
import { Box, Paper, Divider, Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'

function DD7AddUser() {

    const [designation, setDesignation] = React.useState("");


    return (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                <Box sx={{display:"flex",justifyContent:'space-between', margin:2, }}>
                    <Typography variant='h5' align='justify' >Add User</Typography>
                    <TextField
                        label="Add Bulk Users"
                        variant="outlined" />
                </Box>
                <Divider />

                <Box sx={{ margin: 2 }}>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Username"
                                variant="outlined" />
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Contact Number"
                                variant="outlined"
                                type={"number"} />

                        </Grid>
                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Password"
                                variant="outlined" />

                        </Grid>
                        <Grid item xs={2} sm={2} md={2} >
                            <FormControl fullWidth>
                                <InputLabel id="designation-select-label">Designation</InputLabel>
                                <Select
                                    labelId="designation-select-label"
                                    id="designation-select"
                                    value={designation}
                                    label="Designation"
                                    onChange={(e) => { setDesignation(String(e.target.value)) }}
                                >
                                    <MenuItem value={'EXECUTIVE'}>EXECUTIVE</MenuItem>
                                    <MenuItem value={'MANAGER'}>MANAGER</MenuItem>
                                    <MenuItem value={"ORG_ADMIN"}>ORG_ADMIN</MenuItem>
                                    <MenuItem value={"ASST_MANAGER"}>ASST_MANAGER</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Employee Id"
                                variant="outlined" />
                        </Grid>
                    </Grid>

                </Box>


                <Divider />

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "flex-end" }}>
                    <Button variant="outlined" sx={{ margin: 3 }}>Cancel</Button>
                    <Button variant="contained" sx={{ margin: 3 }}>Submit</Button>
                </Box>




            </Paper>
        </Box>
    )
}

export default DD7AddUser