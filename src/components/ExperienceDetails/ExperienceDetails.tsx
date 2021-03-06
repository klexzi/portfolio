import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { grey } from '@material-ui/core/colors';

export interface ExperienceDetailsTypes {
  duration: string;
  titleRole: string;
  location: string;
  details: string;
}
const useStyles = makeStyles({
  location: {
    color: grey[400],
    textTransform: 'capitalize',
    fontWeight: 700,
  },
});

const ExperienceDetails = ({
  duration,
  titleRole,
  location,
  details,
}: ExperienceDetailsTypes) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      marginBottom={4}
      marginTop={1}
      // className="animated infinite pulse slower"
    >
      <Box component="div">
        <Typography variant="overline" color="primary" gutterBottom>
          {duration}
        </Typography>
        <Typography variant="h6" color="textPrimary">
          {titleRole}
        </Typography>
        <Typography
          className={classes.location}
          variant="subtitle1"
          color="textSecondary"
          paragraph
        >
          {location}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {details}
        </Typography>
      </Box>
    </Box>
  );
};

export default ExperienceDetails;
