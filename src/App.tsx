import React, { useReducer, createContext } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Grid, Container, Hidden } from "@material-ui/core";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MessageArea from "./components/MessageArea";
import MobileTopBar from "./components/MobileTopBar";

import AppReducer from "./store";
import initialState from "./store/initialState";
interface AppContextInterface {
  state: any;
  dispatch: any;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const App = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Header />
      <Container maxWidth="lg">
        <Hidden mdUp>
          <MobileTopBar />
        </Hidden>
        <Box mt={2} className={classes.border}>
          <Grid container>
            {/* Sidebar */}
            <Hidden smDown>
              <Grid item md={4}>
                <Sidebar />
              </Grid>
            </Hidden>
            {/* Message Area */}
            <Grid item xs>
              <MessageArea />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </AppContext.Provider>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  border: {
    border: "1px solid #ddd",
  },
}));

export default App;
