// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import '../styles/header.css';

export const Header = (props) => {
    const { isLoggedIn, user, userInfoFetched } = props;
    return (
        <Fragment>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">Movie Web</NavLink>
                </Navbar.Brand>
            </Navbar.Header> 
            {
                !isLoggedIn && 
                <Nav>
                    <NavItem eventKey={1}>
                        <div onClick={props.onLoginClick}>
                            Login
                        </div>
                    </NavItem>
                    <NavItem eventKey={2}>
                        <NavLink to="/register">
                            Register
                        </NavLink>
                    </NavItem>
                </Nav>
            }
            {
                isLoggedIn &&
                <Nav>
                    <NavItem eventKey={1}>
                        <div onClick={props.onUserClick}>
                            Welcome {userInfoFetched ? (user ? user.username: '') : ''}
                        </div>
                    </NavItem>
                    <NavItem eventKey={1}>
                        <div onClick={props.onLogout}>
                            Logout
                        </div>
                    </NavItem>
                </Nav>
            }
        </Navbar>
    </Fragment>
    )
} 