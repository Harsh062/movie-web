// IMPORT PACKAGE REFERENCES

import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// IMPORT PROJECT REFERENCES

import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import  Dashboard  from './dashboard/Dashboard';
import Home from './home/Home';
import { LoadingIndicator } from './shared/LoadingIndicator';
import { fetchGuestSessionId, fetchRequestToken } from './state/actions/authActions';

// COMPONENT

class App extends Component {
    componentDidMount(){
        //this.props.fetchGuestSessionId();
    }

    loginClickHandler = () => {
        console.log('Clicked on login');
        this.props.fetchRequestToken();
    }

    navigateToTmdbLoginPage = () => {
        console.log('this.props: ', this.props);
        window.location.href = `https://www.themoviedb.org/authenticate/${this.props.requestToken}?redirect_to=http://localhost:3000/home`;
    }

    render() {
        const {fetchingRequestToken, requestTokenFetched} = this.props;
        return (
                <Fragment>
                    {
                        !fetchingRequestToken && 
                        <Fragment>
                            <Header onLoginClick={this.loginClickHandler}/>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Route path='/' component={Dashboard} exact={true} />
                            </Switch>
                            <Footer />
                        </Fragment>
                    }
                    {
                        <LoadingIndicator busy={fetchingRequestToken} />
                    }
                    {
                        requestTokenFetched && this.navigateToTmdbLoginPage()
                    }
                    {

                    }
                </Fragment>
        );
    }
    
} 

const mapStateToProps = state => {
    const { sessionId, fetchingGuestSessionId, fetchGuestSessionIdError } = state.guestSessionReducer;
    const { requestToken, fetchingRequestToken, fetchRequestTokenError, requestTokenFetched } = state.requestTokenReducer;
    return {
        sessionId,
        requestToken,
        fetchingRequestToken,
        requestTokenFetched,
        fetchRequestTokenError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchGuestSessionId, fetchRequestToken,  }, dispatch);
};

// CONFIGURE COMPONENT PROP TYPES

App.propTypes = {
    fetchSessionId: PropTypes.func,
    fetchingRequestToken: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);