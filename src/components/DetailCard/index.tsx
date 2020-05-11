import React from 'react';
import Star from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import cardStyles from './styles';
interface Props {
    classes: object
}

const Card: React.FC<Props> = (props: any) => {
    const {
		classes
	} = props;

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

export default withStyles(cardStyles, { withTheme: true })(Card);