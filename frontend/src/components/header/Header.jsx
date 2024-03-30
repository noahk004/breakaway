import React from 'react'
import { Link } from 'react-router-dom'

import breakawayLogo from '/breakaway-logo.svg'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Header({ username }) {
    return (
        <Navbar className='bg-body-tertiary d-flex justify-content-between ps-5 pe-5'>
            <Navbar.Brand className='d-flex'><img src={breakawayLogo} width='30px' /><div className='ps-2'>Breakaway</div></Navbar.Brand>
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/goals'>Goals</Nav.Link>
            </Nav>
            <Navbar.Text className='ms-2'>Signed in as: <Link to='/sign-in'>{username}</Link></Navbar.Text>
        </Navbar>
    )
}
