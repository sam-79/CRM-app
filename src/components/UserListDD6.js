import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircleIcon from '@mui/icons-material/Circle';
import { Typography, Box, Dialog } from '@mui/material';
import PropTypes from 'prop-types';

import DD7AddUser from './DD7_AddUser';
import DD8EditUser from './DD8_EditUser';


// Test data
const columns = [
    { id: 'no', label: 'NO.', minWidth: 50 },
    { id: 'username', label: 'Username', minWidth: 200 },
    {
        id: 'mobile',
        label: 'MobileNumber',
        minWidth: 150,
    },
    {
        id: 'emplaoyeeID',
        label: 'Employee Id',
        minWidth: 170,
    },
    {
        id: 'email',
        label: 'Email',
        minWidth: 170,
    },

    {
        id: 'campaigns',
        label: 'Campaigns',
        minWidth: 170,
    },
    {
        id: 'designation',
        label: 'Designation',
        minWidth: 170,
    },
    {
        id: "active",
        label: "Active"
    },
    {
        id: "expiry",
        label: "Expiry Date"
    },
    {
        id: "action",
        label: "Action"
    }
];

function createData(no, status, username, mobile, emplaoyeeID, email, campaigns, designation, active, expiry, action) {

    return { no, status, username, mobile, emplaoyeeID, email, campaigns, designation, active, expiry, action };
}

const rows = [
    createData(1, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(2, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(3, "logout", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(4, "logout", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(5, "logout", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(6, "active", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(7, "active", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(8, "active", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(9, "break", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(10, "break", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(12, "break", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(13, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(14, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(15, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),
    createData(16, "login", "Sameer", 9865321472, "EMP123", "sameer@gmail.com", "View Campaigns", "Executive", "Active", "10-02-2022", <MoreVertIcon />),

]





function UserListDD6() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // For action Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const showMenu = Boolean(anchorEl);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const setStatusIcon = (status) => {

        if (status === "login" || status === "Logged in") {
            return <CircleIcon sx={{ color: '#388e3c', fontSize: 20 }} />
        } else if (status === "logout" || status === "Logged out") {
            return <CircleIcon sx={{ color: '#8f8f8f', fontSize: 20 }} />
        } else if (status === "active" || status === "Active") {
            return <CircleIcon sx={{ color: '#1128cb', fontSize: 20 }} />
        } else if (status === "break" || status === "On break") {
            return <CircleIcon sx={{ color: '#c7620b', fontSize: 20 }} />
        } else {
            return <CircleIcon />
        }
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {
                    ["Logged in", "Logged out", "Active", "On break"].map((data) => {
                        return (
                            <Typography sx={{ marginY: 2, marginX: 3 }}>
                                {setStatusIcon(data)}
                                {data}
                            </Typography>

                        )
                    })
                }

            </Box>
            <TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {
                                                        column.id === "username" ? (
                                                            <Typography sx={{ fontSize: 20 }}>
                                                                {setStatusIcon(row.status)}
                                                                {value}
                                                            </Typography>
                                                        ) : column.id === "action" ?
                                                            <IconButton aria-label="Action" onClick={(e) => { setAnchorEl(e.currentTarget) }}>
                                                                {value}
                                                            </IconButton>
                                                            : value


                                                    }
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 50]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <Menu
                id="action-btn-menu"
                anchorEl={anchorEl}
                open={showMenu}
                onClose={() => { setAnchorEl(null) }}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => { setAnchorEl(null) }}>Edit</MenuItem>
                <MenuItem onClick={() => { setAnchorEl(null) }}>Change Password</MenuItem>
                <MenuItem onClick={() => { setAnchorEl(null) }}>Reassign Leads</MenuItem>
                <MenuItem onClick={() => { setAnchorEl(null) }}>Delete</MenuItem>
            </Menu>
        </Paper >
    );
}


function AddUserDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DD7AddUser />
        </Dialog>
    );
}

AddUserDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};



function EditUserDialog(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DD8EditUser />
        </Dialog>
    );
}

EditUserDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


export default UserListDD6