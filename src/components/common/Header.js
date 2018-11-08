import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';


import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { clickedNewAction } from '../../actions/passengersActions';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    logo: {
      marginLeft: -12,
      marginRight: 20,
    },
    link: {
        'text-decoration': 'none',
        'color': 'white'
    }
  };

const Header = (props) => (
    <div className={props.classes.root}>
        <AppBar position="static" color="primary">
        <Toolbar>
            { props.clickedNew ?   
                <IconButton className={props.classes.menuButton} color="inherit" aria-label="Menu" onClick={props.history.goBack}>
                    <ArrowBack />
                </IconButton> : null
            }
            <a href="https://bob.io/" target="_blank" rel="noopener noreferrer"><Avatar className={props.classes.logo} alt="Bob.io Logo" src="data:image/jpeg;base64,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" /></a>
            <Typography variant="h6" color="inherit" className={props.classes.grow}>
            Bob.io Coding Challenge 
            </Typography>
            <Button color="inherit" onClick={(e) => { props.dispatch(clickedNewAction()); props.history.push("/new")}}>New</Button>
        </Toolbar>
        </AppBar>
    </div>
);

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => {
    return {
        clickedNew: state.catalog.clickedNew
    };
};

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Header)));