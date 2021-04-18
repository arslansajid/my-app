import React, { useState } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

import SearchInput from "../SearchInput";
import useContext from "../../hooks/useContext";
import { setSelectedUser } from "../../store/actions";

interface Props {
  classes: object;
}

interface UserObject {
  id: number;
  name: string;
  userName: string;
  messages: any[];
}

const Sidebar: React.FC<Props> = (props: any) => {
  const { classes } = props;
  const ContextValues = useContext();
  const users = ContextValues?.state.users;
  const selectedUser = ContextValues?.state.selectedUser;
  const dispatch = ContextValues?.dispatch;

  const [stateUsers, setStateUsers] = useState<any[]>([...users]);

  const filterUsersByName = React.useCallback(
    (name) => {
      let results = users.filter((x: any) =>
        x.name.toLowerCase().includes(name.toLowerCase().trim())
      );
      setStateUsers(results);
    },
    [users]
  );

  const handleUserClick = (item: UserObject) => {
    dispatch(setSelectedUser(item));
  };

  return (
    <Grid className={`${classes.borderRight500} ${classes.messageArea}`}>
      <Grid className={classes.searchChatContainer}>
        <SearchInput onChange={(val: string) => filterUsersByName(val)} />
      </Grid>
      <List>
        {stateUsers.map((item: UserObject, index: number) => {
          return (
            <Grid
              key={index}
              className={
                selectedUser?.id === item.id
                  ? classes.selectedItem
                  : classes.listItem
              }
            >
              <ListItem button onClick={() => handleUserClick(item)}>
                <ListItemIcon>
                  <Avatar
                    alt="user-img"
                    src={require("../../assets/user.png")}
                  />
                </ListItemIcon>
                <ListItemText>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">{item.userName}</Typography>
                </ListItemText>
              </ListItem>
            </Grid>
          );
        })}
      </List>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(Sidebar);
