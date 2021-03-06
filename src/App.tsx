import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Header from "./components/Header";
import DetailCard from "./components/DetailCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "5vh 0 5vh 0",
      minHeight: "500px",
      background: "#eff5f5"
    },
    title: {
      color: '#014038',
      fontWeight: 600,
      margin: "20px 0 20px 0"
    },
    contactButton: {
      background: "#ffa537",
      width: "80%",
      margin: "10px 0 10px 0"
    },
    contactButtonTitle: {
      fontWeight: 500,
      color: "white",
      textTransform: 'capitalize',
      padding: "10px"
    },
    center: {
      textAlign: "center",
    },
    headingCenter: {
      textAlign: "center",
      padding: "20px 0 20px 0",
    },
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    imgContainer: {
      height: "400px",
      width: "100%",
      objectFit: "contain"
    }
  }),
);

const App = () => {
  const classes = useStyles();
  const count = 5;

  return (
    <div className="main">
      <Header />

      <Grid className={classes.container}>
        <Container maxWidth="lg">
          <Grid className={classes.container} direction="row"
            justify="center"
            container
            spacing={0}
          >
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Typography variant="h2" className={classes.title}>
                Make money magic.
          </Typography>
              <Typography variant="h5" className={classes.title}>
                All-in-one personal finance guidance, tracking and automation.
          </Typography>
              <Button className={classes.contactButton} variant="contained">
                <Typography variant="h5" className={classes.contactButtonTitle}>
                  Contact Us
            </Typography>
              </Button>
              <Typography variant="h5" className={classes.title}>
                All-in-one personal finance guidance, tracking and automation.
          </Typography>
            </Grid>
            <Grid className={classes.imageContainer} item lg={4} md={4} sm={4} xs={12}>
              <img className={classes.imgContainer} src={require("./assets/1.png")} alt="header-section" />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      <Container maxWidth="sm" className={classes.headingCenter}>
        <Typography variant="h5" className={classes.title}>
          Make the best money decisions, and feel good while doing it.
          </Typography>
      </Container>

      <Container maxWidth="lg" className={classes.center}>
        <Grid className={"cards-container"} direction="row"
          justify="center"
          alignItems="center"
          container
          spacing={5}
        >
          {[...Array(count)].map((e, index) => {
            return (
              <Grid key={index} item lg={4} md={4} sm={4} xs={12}>
                <DetailCard />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
