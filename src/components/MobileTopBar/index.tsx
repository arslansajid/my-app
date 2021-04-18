import React from "react";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

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

const MobileTopBar: React.FC<Props> = (props: any) => {
  const { classes } = props;
  const ContextValues = useContext();

  const users = ContextValues?.state.users;
  const dispatch = ContextValues?.dispatch;

  const handleUserClick = (item: UserObject) => {
    dispatch(setSelectedUser(item));
  };

  return (
    <Grid component={Paper} container className={classes.messageBarMobile}>
      <Grid item xs={12} className={classes.newMessageGridMobile}>
        {users.map((item: UserObject, index: number) => {
          return (
            <Grid
              container
              direction="column"
              alignItems="center"
              key={index}
              className={classes.userTile}
              onClick={() => handleUserClick(item)}
            >
              <Avatar
                alt="user-img"
                src={require("../../assets/user.png")}
                className={classes.avatarMobile}
              />
              <Typography variant="body2" className={classes.ellipsis}>
                {item.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(MobileTopBar);
