import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

import { connect } from 'react-redux';
import { loadPassengers } from '../actions/passengersActions';

const styles = theme => ({
    lead: {
        color: '#ccc'
    },
    root: {
      flexGrow: 1,
    },
    grid: {
        'margin-top': '10px',
        'margin-bottom': '64px'
    },
    card: {
        'margin-left': '20px',
        'margin-right': '20px',
        minWidth: 150,
      },
      title: {
        fontSize: 20,
      }
  });


// Passenger Card Container component.

class PassengerCardContainer extends Component {

    state = {
        completed: 0,
    };

    constructor() {
        console.log('PassengerCardContainer::constructor | method called');
        super();
    }

    // We want to get passengers from the API right after our component renders.
    componentDidMount() {
        console.log('PassengerCardContainer::componentDidMount | method called');
        this.timer = setInterval(this.progress, 500);
        this.props.dispatch(loadPassengers());
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress = () => {
        const { completed } = this.state;
        if (completed !== 100) {
          const diff = Math.random() * 50;
          this.setState({ completed: Math.min(completed + diff, 100) });
        }
    };

    /*
    handleListItemClick(e, phone) {
        // e.preventDefault();
        // console.log('PhoneListContainer::handleClick | method called', phone);
        this.props.dispatch(selectPhoneAction(phone));
        this.props.history.push("/detail")
    }
    */

    render() {
        const { classes, passengers } = this.props;
        return (
            <div className={classes.root}>
                <h3 className={classes.lead}>Welcome to Passengers App built with React and Redux.</h3>
                <LinearProgress variant="determinate" value={this.state.completed} />
                {passengers && this.state.completed > 90 ?  <Grid container spacing={24} className={classes.grid}>
                    {passengers.map((passenger, index) => {
                        return (
                            <Grid key={ index } item xs>
                                <Card className={classes.card}>
                                    <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {passenger.name}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    {passenger.bags} bags
                                    </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                    </Grid> : 'Loading passengers....'}
            </div>
        );
    }
}

PassengerCardContainer.propTypes = {
    classes: PropTypes.object.isRequired,
    passengers: PropTypes.array,
    dispatch: PropTypes.func.isRequired

};

/* Subscribe component to redux store and merge the state into component's props. */
const mapStateToProps = ({ catalog }) => ({
    passengers: catalog.passengers,
});


/* Connect method from react-router connects the component with redux store. */
export default connect(mapStateToProps)(withStyles(styles)(PassengerCardContainer));