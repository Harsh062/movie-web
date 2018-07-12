// IMPORT PACKAGE REFERENCES

import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';

// IMPORT PROJECT REFERENCES

import { Header } from './components/Header';
import  Dashboard  from './containers/Dashboard';
import Home from './containers/Home';
import MovieDetails from './containers/MovieDetails';

import { Footer } from './shared/Footer';
import { LoadingIndicator } from './shared/LoadingIndicator';

import { fetchGuestSessionId, fetchRequestToken, fetchAPIConfiguration, fetchSessionId, logout } from './state/actions/authActions';
import { setSessionId, getSessionId, setUser, getUser } from './services/AuthService';

// COMPONENT

class App extends Component {
    componentWillReceiveProps(nextProps) {
        const request_token = queryString.parse(this.props.location.search).request_token;
        const sessionId = getSessionId();
        const isLoggedin = (sessionId !== null);
        const user = getUser();
        if (!isLoggedin && request_token && nextProps.sessionId) {
            setSessionId(nextProps.sessionId);
        }
        if (!user && isLoggedin && request_token && nextProps.userinfo) {
            setUser(JSON.stringify(nextProps.userinfo));
        }
    }

    componentDidMount(){
        const request_token = queryString.parse(this.props.location.search).request_token;
        const sessionId = getSessionId();
        const isLoggedin = (sessionId !== null);
        if (request_token && !isLoggedin) {
            this.props.fetchSessionId(request_token);
        }
        this.props.fetchAPIConfiguration();
    }

    loginClickHandler = () => {
        this.props.fetchRequestToken();
    }

    onLogoutHandler = () => {
        window.localStorage.clear();
        this.props.logout();
        this.props.history.push('/');
    }

    navigateToTmdbLoginPage = () => {
        window.location.href = `https://www.themoviedb.org/authenticate/${this.props.requestToken}?redirect_to=http://localhost:3000/dashboard`;
    }

    render() {
        const sessionId = getSessionId();
        const request_token = queryString.parse(this.props.location.search).request_token;
        const user = JSON.parse(getUser());
        const isUserLoggedIn = (sessionId !== null);
        const {
                fetchingRequestToken, 
                requestTokenFetched, 
                fetchingApiConf, 
                apiConfFetched, 
                apiConf,
                fetchingUserInfo, 
                userInfoFetched,
                fetchingSessionId, 
                sessionIdFetched,
                userinfo
                } = this.props;
        return (
                <Fragment>
                    {
                        <LoadingIndicator busy={fetchingRequestToken || fetchingApiConf || fetchingSessionId || fetchingUserInfo} />
                    }
                    {
                        requestTokenFetched && this.navigateToTmdbLoginPage()
                    }
                    {
                        (request_token ? (sessionId ? apiConfFetched : (apiConfFetched && sessionIdFetched && userInfoFetched)) : apiConfFetched && !fetchingRequestToken && !requestTokenFetched) &&
                        <Fragment>
                            <Header 
                                onLoginClick={this.loginClickHandler} 
                                isLoggedIn={isUserLoggedIn} 
                                user={user}
                                onLogout={this.onLogoutHandler}
                                userInfoFetched={userInfoFetched}/>
                            <Switch>
                                <Route path='/' component={Home} exact={true} />
                                <Route path='/home' component={Home} />
                                <Route path='/dashboard' component={Dashboard} />
                                <Route path='/movie/:id' component={MovieDetails} />
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
    const { sessionId, fetchingSessionId, sessionIdFetched, fetchSessionIdError } = state.sessionReducer;
    const { userinfo, fetchingUserInfo, userInfoFetched, userInfoFetchError } = state.accountInfoReducer;
    return {
        guestSessionId,

        requestToken,
        fetchingRequestToken,
        requestTokenFetched,
        fetchRequestTokenError,

        apiConf,
        fetchingApiConf, 
        apiConfFetched, 
        fetchApiConfError,

        sessionId, 
        fetchingSessionId, 
        sessionIdFetched,
        fetchSessionIdError,

        userinfo, 
        fetchingUserInfo, 
        userInfoFetched, 
        userInfoFetchError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchGuestSessionId, fetchRequestToken, fetchAPIConfiguration, fetchSessionId, logout }, dispatch);
};

// CONFIGURE COMPONENT PROP TYPES

App.propTypes = {
    fetchSessionId: PropTypes.func,
    fetchingRequestToken: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);