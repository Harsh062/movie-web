// IMPORT PACKAGE REFERENCES

import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// IMPORT PROJECT REFERENCES

import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import  Dashboard  from '../dashboard/Dashboard';
import { fetchSessionId, fetchRequestToken } from '../state/actions/authActions';

// COMPONENT

class AppRouter extends Component {
    componentDidMount(){
        //this.props.fetchSessionId();
        //this.props.fetchRequestToken();
    }

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path='/' component={Dashboard} exact={true} />
                    </Switch>
                    <Footer />
                </Fragment>
            </BrowserRouter>
        );
    }
    
} 

const mapStateToProps = state => {
    const { sessionId } = state.guestSessionReducer;
    const { requestToken } = state.requestTokenReducer;
    return {
        sessionId,
        requestToken
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchSessionId, fetchRequestToken }, dispatch);
};

// CONFIGURE COMPONENT PROP TYPES

AppRouter.propTypes = {
    fetchSessionId: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);