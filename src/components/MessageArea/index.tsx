import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Fab,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import SendIcon from "@material-ui/icons/Send";
import MessagesIcon from "@material-ui/icons/Forum";
import styles from "./styles";

import useContext from "../../hooks/useContext";
import { sendMessage } from "../../store/actions";

interface Props {
  classes: object;
}

interface MessageObject {
  date: any;
  message: string;
}

const MessageArea: React.FC<Props> = (props: any) => {
  const { classes } = props;
  const [message, setMessage] = useState("");

  const ContextValues = useContext();
  const selectedUser = ContextValues?.state.selectedUser;
  const dispatch = ContextValues?.dispatch;

  const handleSendMessage = (message: string) => {
    dispatch(sendMessage(message));
    setMessage("");
  };

  return (
    <Grid className={classes.chatSection} id="message-area">
      {!!selectedUser ? (
        <>
          <Grid
            className={classes.selectedChatContainer}
            container
            alignItems="center"
          >
            <Grid item xs>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    alt="user-img"
                    src={require("../../assets/user.png")}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">{selectedUser?.name}</Typography>
                  <Typography variant="body2">
                    {selectedUser?.userName}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.messageArea}>
            <List id="messages">
              {selectedUser?.messages.map(
                (item: MessageObject, index: number) => {
                  return (
                    <ListItem key={index}>
                      <Grid container>
                        <Grid item xs={12}>
                          {!!item && (
                            <ListItemText
                              classes={{ root: classes.listItemText }}
                            >
                              <Typography
                                variant="body2"
                                className={classes.messageBackground}
                              >
                                {item.message}
                              </Typography>
                            </ListItemText>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <ListItemText
                            classes={{ root: classes.listItemText }}
                            secondary={`${item.date.toLocaleDateString()} ${item.date.toLocaleTimeString()}`}
                          ></ListItemText>
                        </Grid>
                      </Grid>
                    </ListItem>
                  );
                }
              )}
            </List>
          </Grid>
          <Grid className={classes.messageInput}>
            <Grid container spacing={2} alignItems="center">
              <Grid item md={11} xs={12}>
                <TextField
                  autoFocus
                  disabled={!selectedUser}
                  placeholder="Type a message"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onKeyPress={(event: React.KeyboardEvent<HTMLDivElement>) => {
                    if (event.key === "Enter" && message.length) {
                      handleSendMessage(message);
                    }
                  }}
                />
              </Grid>
              <Hidden smDown>
                <Grid item xs>
                  <Fab
                    onClick={() =>
                      message.length ? handleSendMessage(message) : {}
                    }
                    color="primary"
                    className={classes.send}
                    type="submit"
                  >
                    <SendIcon className={classes.sendIcon} />
                  </Fab>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.centerContainer}
        >
          <MessagesIcon fontSize="large" />
          <Typography variant="h5">Select a user to start chatting!</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(MessageArea);
