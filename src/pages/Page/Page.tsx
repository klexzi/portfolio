import React from 'react';
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    boxSizing: 'border-box',
    padding: '32px',
    [theme.breakpoints.down('sm')]: {
      padding: '30px 5px',
    },
  },
}));
const Page: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} p={4}>
      {children}
    </Box>
  );
};

export default Page;
