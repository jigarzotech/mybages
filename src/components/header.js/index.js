import { useTheme } from "@mui/material/styles";
import { Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import theme, { Colors } from '../../styles/theme';
import { useSelector } from "react-redux";

export default function Header() {
    const navigate = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const user = useSelector((state) => state.user)
    const userToken = user.user && Object.keys(user.user).length !== 0
    const auth = userToken;

    return (

        <Box sx={{
            alignItems: 'center', display: 'flex', cursor: 'pointer'
        }} onClick={() => {
            navigate(auth ? '/home' : '/')
        }}
        >
            <img src={require('../../image/logo.png')} width="50px" height='50px'></img>
            <Typography color={Colors.secondary} fontSize={30} fontFamily={`'Montez','cursive`}
            >{matches ? '' : 'My Bages'}</Typography>
        </Box>
    )
}
