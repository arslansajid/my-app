import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: "#eff5f5"
    },
    container : {
      minWidth: '900px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
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
  }),
);

interface Props {
}

const Header: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.container}>
          <Typography variant="h6" className={classes.title}>
            CodeMemory
          </Typography>
          <div className={classes.linksContainer}>
          <Button className={classes.navButton} color="inherit">Menu1</Button>
          <Button className={classes.navButton} color="inherit">Menu1</Button>
          <Button className={classes.navButton} color="inherit">Menu1</Button>
          <Button className={classes.navButton} color="inherit">Menu1</Button>
          </div>
          <Button className={classes.loginButton} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;