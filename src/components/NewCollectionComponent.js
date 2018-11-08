import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { clearClickedNewAction, newPassenger } from '../actions/passengersActions';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing.unit,
      },
      button: {
        margin: theme.spacing.unit,
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
});

// New Collection component.

class NewCollectionComponent extends Component {

    state = {
        name: '',
        bags: ''
    }

    constructor() {
        console.log('NewCollectionComponent::constructor | method called');
        super();
    }

    componentDidMount() {
        console.log('NewCollectionComponent::componentDidMount | method called');
        window.onpopstate = () => {
            this.props.dispatch(clearClickedNewAction());
        }
    }

    componentWillUnmount() {
    }

    handleClick(e) {
        // e.preventDefault();
        console.log('NewCollectionComponent::handleClick | method called');
        let passenger = {
            name: this.state.name,
            bags: this.state.bags
        }
        this.props.dispatch(newPassenger(passenger));
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">

            <TextField
                id="standard-name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                margin="normal"
                onChange={this.handleChange('name')}
            />
            <TextField
                id="standard-bags"
                label="Bags"
                className={classes.textField}
                value={this.state.bags}
                margin="normal"
                onChange={this.handleChange('bags')}
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={(e) => this.handleClick(e)}>
                Add passenger
            </Button>
        </form>
        );
    }
}

NewCollectionComponent.propTypes = {
    classes: PropTypes.object.isRequired,

};

const mapStateToProps = state => {
    return {
      clickedNew: state.catalog.clickedNew
    };
};

export default connect(mapStateToProps)(withStyles(styles)(NewCollectionComponent));
