import React, { useState } from 'react'
import { Box, Paper, Divider, Button, TextField, Grid, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material'


function DD8EditUser(props) {
    // props contain {default_name,default_contact,default_designation,default_manager}
    const [designation, setDesignation] = useState(props.default_designation);
    const [manager, setManager] = useState(props.default_manager);
    const [name, setName] = useState(props.default_name)
    const [mobile,setMobile] = useState(props.default_contact)
    



    return (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                <Box sx={{display:"flex",justifyContent:'space-between', margin:2, }}>
                    <Typography variant='h5' align='justify' >Edit User</Typography>
                    
                </Box>
                <Divider />

                <Box sx={{ margin: 2 }}>

                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Username"
                                variant="outlined"
                                value={name}
                                onChange={setName} />
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} >
                            <TextField
                                label="Contact Number"
                                variant="outlined"
                                type={"number"}
                                value={mobile}
                                onChange={setMobile} />

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
                            <FormControl fullWidth>
                                <InputLabel id="manager-select-label">Manager</InputLabel>
                                <Select
                                    labelId="manager-select-label"
                                    id="manager-select"
                                    value={manager}
                                    label="Manager"
                                    onChange={(e) => { setManager(String(e.target.value)) }}
                                >
                                    <MenuItem value={'Manager01'}>Manager01</MenuItem>
                                    <MenuItem value={'Manager02'}>Manager02</MenuItem>
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

export default DD8EditUser