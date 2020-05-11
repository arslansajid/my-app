
import { createStyles } from '@material-ui/core/styles';

const headerStyles = createStyles({
    root: {
        flexGrow: 1,
    },
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: "#eff5f5"
    },
    container: {
        minWidth: '900px',
    },
    menuButton: {
        // marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "#a9adae"
    },
    navButton: {
        color: "#a9adae",
        textTransform: "capitalize"
    },
    loginButton: {
        color: "#8d89de",
        fontWeight: 500,
        textTransform: "capitalize"
    },
    linksContainer: {
        flexGrow: 1,
    }
})

export default headerStyles;