import Image from '../../image/404.jpg'
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    container: {

        backgroundImage: `url(${Image})`,
        // backgroundImage: `linear-gradient(180deg, 
        //     rgba(0, 0, 0, 0.01), 
        //     rgba(0, 0, 0, 0.9)),url(${"https://wallpaperaccess.com/full/4219110.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: 'white',
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        textAlign: 'center',
    },
    heading: {
        paddingTop: '100px',
        fontSize: '6rem'
    },
    paraOne: {
        paddingTop: '0px',
        marginTop: '0px',
        fontSize: '30px'
    },
    paraTwo: {
        paddingTop: '0px',
        marginTop: '0px',
        fontSize: '20px',
    },
    buttonDiv: {
        width: '20%',
        margin: 'auto',
        marginTop: '0px',
        display: 'flex',
        cursor: 'pointer',
    },
    button: {
        width: '100%',
        margin: 'auto',
        display: 'flex',
        padding: '10px',
    }


});