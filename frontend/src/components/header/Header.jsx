import React from 'react'
import { Link } from 'react-router-dom'

import breakawayLogo from '/public/breakaway-logo.svg'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

export default function Header({ username }) {
    return (
        <Navbar className='bg-body-tertiary d-flex justify-content-between ms-5 me-5'>
            <Navbar.Brand className='d-flex'><img src={breakawayLogo} width='30px'/><div className='ps-2'>Breakaway</div></Navbar.Brand>
            <Nav>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Goals</Nav.Link>
            </Nav>
            <Navbar.Text className='ms-2'>Signed in as: <Link to='sign-in'>{username}</Link></Navbar.Text>
        </Navbar>
    )
}
