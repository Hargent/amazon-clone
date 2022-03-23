import './DoneButton.css';

import Fab from '@material-ui/core/Fab';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function DoneButton() {
  const classes = useStyles();

  return (
    <div  className={classes.root}>
      <div className="done__btn">
        <Fab
        variant="extended">
          DONE
        </Fab>
      </div>
    </div>
  );
}


export default DoneButton;
