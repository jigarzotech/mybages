import Image from '../../image/4042.jpg'
import { makeStyles } from '@mui/styles';
import { Colors } from '../theme';

export const useStyles = makeStyles({
    container: {
        background: 'white',
        color: Colors.primary,
        height: '84vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        textAlign: 'center',
    },
    box1: {
        width: '50%',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
    box2: {
        width: '50%',
    },
    heading: {
        paddingTop: '60px',
        fontSize: '6rem',
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