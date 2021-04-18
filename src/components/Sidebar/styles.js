
import { createStyles } from '@material-ui/core/styles';
import Colors from "../../statics/colors";

const styles = createStyles((theme) => ({
    selectedItem: {
        cursor: "pointer",
        backgroundColor: "rgba(0, 0, 0, 0.04)",
        borderBottom: `1px solid ${Colors.borderColor}`,
        borderRight: `3px solid ${theme.palette.primary.main}`,
    },
    listItem: {
        cursor: "pointer",
        borderBottom: `1px solid ${Colors.borderColor}`,
    },
    borderRight500: {
        borderRight: `1px solid ${Colors.borderColor}`,
    },
    messageArea: {
        height: "calc(100vh - 100px)",
    },
    searchChatContainer: {
        borderBottom: `1px solid ${Colors.borderColor}`,
        padding: theme.spacing(2),
    },
}))

export default styles;