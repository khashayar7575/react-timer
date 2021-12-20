import React, { FC, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import moment from 'moment';
import { relative } from 'path';

interface SecondsInterfaceProps {
  [x: string]: any;
}

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    margin: '20px 80px',
  },

  secondsBox: {
    height: 10,
    backgroundColor: '#90A4AE',
    position: 'relative',
    borderRadius: 2,
    transition: 'width 1500ms ease-out',
    boxShadow: 'inset 0 1px 2px #1a1a1a, inset 0 -1px 2px #1a1a1a',
  },

  secondsNumber: {
    position: 'absolute',
  },
}));

const Seconds: FC<SecondsInterfaceProps> = props => {
  const classes = styles();
  const [seconds, setSeconds] = useState<number[] | undefined>(() => {
    const temp: number[] = [];
    for (let i = 1; i <= Number(moment().format('ss')); i++) {
      temp.push(i);
    }
    return temp;
  });

  useEffect(() => {
    setTimeout(() => {
      if (seconds && seconds.length <= 58) {
        setSeconds([...seconds, seconds.length + 1]);
      } else {
        setSeconds([]);
      }
    }, 1000);
  }, [seconds]);

  return (
    <div className={classes.container}>
      {seconds && (
        <div
          className={classes.secondsBox}
          style={{ width: `${(seconds.length * 100) / 60}%` }}
        ></div>
      )}
    </div>
  );
};

export default Seconds;
