
import { createStyles } from '@material-ui/core/styles';

const styles = createStyles((theme) => ({
    newMessageGridMobile: {
        padding: "5px 10px",
        overflow: "hidden",
        display: "inline-flex",
        overflowX: "scroll",
    },
    messageBarMobile: {
        margin: theme.spacing(1, 0),
    },
    userTile: {
        padding: "0 5px",
        cursor: "pointer"
    },
    avatarMobile: {
        marginBottom: 5,
        height: 45,
        width: 45,
    },
    ellipsis: {
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
    },
}))

export default styles;