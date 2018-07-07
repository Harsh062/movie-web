// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

export const Header = (props) => (
    <Fragment>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <NavLink to="/">Movie Web</NavLink>
                </Navbar.Brand>
            </Navbar.Header>
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
        </Navbar>
    </Fragment>
);