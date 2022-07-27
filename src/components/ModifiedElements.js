import {styled} from "@mui/material/styles";
import {Typography, TextField} from "@mui/material";


export const FormHeading = styled(Typography)(({ theme }) => ({
    margin: 10,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
    color: theme.palette.text.secondary,
}));

export const InputTextField = styled(TextField)(({ theme }) => ({
    margin: theme.spacing(3),
    textAlign: 'center',
    width: "80%",
    color: theme.palette.text.primary,
}));


