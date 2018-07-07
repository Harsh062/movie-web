import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 
import queryString from 'query-string';
import { fetchSessionId, fetchUserInfo } from '../state/actions/authActions';
import { LoadingIndicator } from '../shared/LoadingIndicator';

class Auth extends Component {
    componentDidMount() {
        console.log(`this.props.request_token: ${queryString.parse(this.props.location.search).request_token}`);
        const request_token = queryString.parse(this.props.location.search).request_token;
        //this.props.fetchSessionId(request_token);
    }
    getUserInfo = (sessionId) => {
        console.log(`sessionId: ${sessionId}`);
    }
    render() {
        const { sessionId, sessionIdFetched, fetchingSessionId } = this.props;
        return (
            <Fragment>
                <p>Auth Component</p>
                {
                    <LoadingIndicator busy={fetchingSessionId} />
                }
            </Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchSessionId, fetchUserInfo }, dispatch);
}

const mapStateToProps = state => {
    const { requestToken } = state.requestTokenReducer;
    const { sessionId, fetchingSessionId, sessionIdFetched } = state.sessionReducer;
    return {
        requestToken,
        sessionIdFetched
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);