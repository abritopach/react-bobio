import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    toolbar: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    grow: {
        flexGrow: 1,
    },
    github: {
        color: 'white'
    }
};

const Footer = (props) => (

    <AppBar position="fixed" color="primary" className={props.classes.appBar}>
        <Toolbar className={props.classes.toolbar}>
        <Typography variant="h6" color="inherit" className={props.classes.grow}>
        © 2018 Adrián Brito Pacheco <a className={props.classes.github} href="https://github.com/abritopach" target="_blank" rel="noopener noreferrer">GitHub</a>
        </Typography>
        </Toolbar>
    </AppBar>
);


Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Footer);