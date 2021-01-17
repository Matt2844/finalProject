import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles'
import './NavMenu.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles({
  list: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '15px',
    outline: 'none',
  },
  menu: {
    backgroundColor: 'white',
  }
});


export default function NavMenu () {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
        </Button>
      <Menu
        className="menu"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.menu}>
          <MenuItem><Link to="/" className={classes.list} onClick={handleClose}>Home</Link></MenuItem>
          <MenuItem><Link to="/login" className={classes.list} onClick={handleClose}>Login</Link></MenuItem>
          <MenuItem><Link to="/register" className={classes.list} onClick={handleClose}>Register</Link></MenuItem>
          <MenuItem><Link to="/checkout" className={classes.list} onClick={handleClose}>Checkout Cart</Link></MenuItem>
          <MenuItem><Link to="/logout" className={classes.list} onClick={handleClose}>Logout</Link></MenuItem>
          <MenuItem><Link to="/shop" className={classes.list} onClick={handleClose}>Market</Link></MenuItem>
        </div>
      </Menu>
    </div>
  );
}