import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ReorderIcon from '@material-ui/icons/Reorder';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: 0,
    right:0,
    left:0,
    backgroundColor: 'rgba(129,185,191,0.7)',
  },
  
});

export default function Footer({screenConfig}) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        console.log(screenConfig[0])
        screenConfig[1](newValue);
      } }
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global state" icon={<ReorderIcon />} />
      <BottomNavigationAction label="Country state" icon={<ReorderIcon />} />
      
    </BottomNavigation>
  );
}
