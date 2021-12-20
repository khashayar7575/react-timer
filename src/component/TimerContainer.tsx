import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Timer from './Timer';

const useStyles = makeStyles({
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: '#263238',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  timerBody: {
    backgroundColor: '#1a1a1a',
    border: '40px solid #141414',
    borderRadius: 20,
    width: '60%',
    color: '#fafafa',
  },

  legContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
  },

  leg: {
    border: '15px solid #141414',
    borderRadius: '0 0 5px 5px',
  },
});

const TimerContainer = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.container}>
      <div className={classes.timerBody}>
        <Timer />
      </div>
    </div>
  );
};

export default TimerContainer;
