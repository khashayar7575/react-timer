import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import Seconds from './Seconds';

interface TimerInterfaceProps {
  timeFormat?: string;
}

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },

  time: {
    fontSize: 400,
  },
}));

const Timer: FC<TimerInterfaceProps> = props => {
  const { timeFormat = 'HH:mm' } = props;
  const classes = styles();

  const [now, setNow] = useState(moment().format(timeFormat));

  useEffect(() => {
    setInterval(() => {
      setNow(moment().format(timeFormat));
    }, 1000);
  }, [now]);

  return (
    <div className={classes.container} data-test="timerContainerComponent">
      <span className={classes.time}>{now}</span>
      <Seconds />
    </div>
  );
};

export default Timer;
