import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Star from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
    }),
);

interface Props {
}

const Card: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Star className={classes.starIcon} />
            <Typography variant="h6" className={classes.title}>
                1:1 advice from your own money expert.
          </Typography>
            <Typography variant="subtitle1" className={classes.description}>
                All-in-one personal finance guidance, tracking and automation.
          </Typography>
            <Typography variant="subtitle1" className={classes.description}>
                All-in-one personal finance guidance, tracking and automation.
          </Typography>
        </div>
    );
}

export default Card;