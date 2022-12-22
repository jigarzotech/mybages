import { ListItemText, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import { useSelector } from 'react-redux'
import { Colors } from "../../styles/theme";


export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const useDetails = useSelector((state) => state.user)
    return (
        <>
            <ListItemText sx={{
                position: 'absolute',
                right: 40,
                color: Colors.primary
            }}>Welcome {useDetails.user.email}</ListItemText>
            {matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}
        </>
    )
}