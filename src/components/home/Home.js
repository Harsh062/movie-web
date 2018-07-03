import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fetchSessionId } from '../state/actions/authActions';
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount(){
        this.props.fetchSessionId(this.props.requestToken);
    }
    render() {
        return (
            <h1>HOME COMPONENT</h1>
        )
    }

}

const mapStateToProps = state => {
    const { sessionId, fetchingSessionId, sessionIdFetched, fetchSessionIdError} = state.sessionReducer;
    const { requestToken } = state.requestTokenReducer;
    return {
        sessionId,
        fetchingSessionId,
        sessionIdFetched,
        fetchSessionIdError
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchSessionId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);