import { ListItemText, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { useSelector } from 'react-redux'
import { Colors } from "../../styles/theme";
import { AppbarUser } from "../../styles/appbar";

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const useDetails = useSelector((state) => state.user)
    return (
        <>
            <AppbarUser>Welcome {useDetails.user.email}</AppbarUser>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}
        </>
    )
}