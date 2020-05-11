
import { createStyles } from '@material-ui/core/styles';

const cardStyles = createStyles({
    root: {
        textAlign: "center"
    },
    title: {
        color: '#014038',
        fontWeight: 600,
    },
    description: {
        color: '#014038',
        fontWeight: 400,
    },
    starIcon: {
        color: "#fddc65",
        background: "#074880",
        padding: "6px",
        borderRadius: "50%",
        width: "25px",
        height: "25px",
    }
})

export default cardStyles;