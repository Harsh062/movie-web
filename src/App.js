// IMPORT PACKAGE REFERENCES

import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// IMPORT PROJECT REFERENCES

import { Header } from './containers/Header';
import  Dashboard  from './containers/Dashboard';
import Home from './containers/Home';
import Auth from './containers/Auth';

import { Footer } from './shared/Footer';
import { LoadingIndicator } from './shared/LoadingIndicator';

import { fetchGuestSessionId, fetchRequestToken, fetchAPIConfiguration } from './state/actions/authActions';

// COMPONENT

class App extends Component {
    componentDidMount(){
        this.props.fetchAPIConfiguration();
    }

    loginClickHandler = () => {
        console.log('Clicked on login');
        this.props.fetchRequestToken();
    }

    navigateToTmdbLoginPage = () => {
        console.log('this.props: ', this.props);
        window.location.href = `https://www.themoviedb.org/authenticate/${this.props.requestToken}?redirect_to=http://localhost:3000/auth`;
    }

    render() {
        const {fetchingRequestToken, requestTokenFetched, fetchingApiConf, apiConfFetched, apiConf} = this.props;
        return (
                <Fragment>
                    {
                        <LoadingIndicator busy={fetchingRequestToken || fetchingApiConf} />
                    }
                    {
                        requestTokenFetched && this.navigateToTmdbLoginPage()
                    }
                    {
                        apiConfFetched && !fetchingRequestToken && !requestTokenFetched &&
                        <Fragment>
                            <Header onLoginClick={this.loginClickHandler}/>
                            <Switch>
                                <Route path='/' component={Home} exact={true} />
                                <Route path='/home' component={Home} />
                                <Route path='/auth' component={Auth} />
                            </Switch>
                            <Footer />
                        </Fragment>
                    }
                </Fragment>
        );
    }
    
} 

const mapStateToProps = state => {
    const { guestSessionId, fetchingGuestSessionId, fetchGuestSessionIdError } = state.guestSessionReducer;
    const { requestToken, fetchingRequestToken, fetchRequestTokenError, requestTokenFetched } = state.requestTokenReducer;
    const { apiConf, fetchingApiConf, apiConfFetched, fetchApiConfError } = state.apiConfReducer;
    return {
        guestSessionId,
        requestToken,
        fetchingRequestToken,
        requestTokenFetched,
        fetchRequestTokenError,
        apiConf,
        fetchingApiConf, 
        apiConfFetched, 
        fetchApiConfError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchGuestSessionId, fetchRequestToken, fetchAPIConfiguration }, dispatch);
};

// CONFIGURE COMPONENT PROP TYPES

App.propTypes = {
    fetchSessionId: PropTypes.func,
    fetchingRequestToken: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);