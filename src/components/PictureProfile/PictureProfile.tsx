import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import dp from '../../assets/dp1.jpg';
import StyledIcon from '../StyledIcon/StyledIcon';
import SocialIcons from '../SocialIcons/SocialIcons';

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: 'inherit',
      height: '104%',
      backgroundImage: `url(${dp})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: '-20px',
    },
    container: {
      height: '100%',
    },
    name: {
      fontWeight: 900,
    },
  };
});
const PictureProfile = () => {
  const classes = useStyles();
  return (
    <Paper elevation={24} className={classes.root}>
      <Box
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
        className={classes.container}
      >
        <Box justifyContent="flex-end">
          <Box p={5} display="flex" flexDirection="column" alignItems="center">
            <Typography
              className={classes.name}
              variant="h4"
              component="h4"
              color="textPrimary"
            >
              Kelechi Nwosu
            </Typography>
            <Typography variant="h6" component="h6" color="primary">
              Software Engineer
            </Typography>
            <Box m={1} display="flex">
              <StyledIcon tipText="linkedIn">
                <a
                  href="https://www.linkedin.com/in/kelechi-link/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons type="linkedin" />
                </a>
              </StyledIcon>
              <StyledIcon tipText="twitter">
                <a
                  href="https://twitter.com/kelechsky"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons type="twitter" />
                </a>
              </StyledIcon>
              <StyledIcon tipText="github">
                <a
                  href="https://github.com/klexzi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcons type="github" />
                </a>
              </StyledIcon>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default PictureProfile;
