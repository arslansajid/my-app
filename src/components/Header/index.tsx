import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import headerStyles from './styles';

interface Props {
  classes: object
}

const Header: React.FC<Props> = (props: any) => {
  const {
		classes
	} = props;

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

export default withStyles(headerStyles, { withTheme: true })(Header);