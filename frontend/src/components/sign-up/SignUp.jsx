import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function SignUp() {
    return (
        <Container className='d-flex align-items-center vh-100' style={{ maxWidth: 400 + 'px' }}>
            <Form className='w-100'>
                <Link to='/' className='d-flex justify-content-end'>
                    <CloseButton />
                </Link>
                <h1 className='d-flex justify-content-center mt-5 mb-4'>Sign Up</h1>
                <div className='d-flex gap-3'>
                    <FloatingLabel className='' label='First name'>
                        <Form.Control placeholder='First name' />
                    </FloatingLabel>
                    <FloatingLabel className='' label='Last name'>
                        <Form.Control placeholder='Last name' />
                    </FloatingLabel>
                </div>
                <FloatingLabel className='mt-3' label='Email'>
                    <Form.Control type='email' placeholder='Email' />
                </FloatingLabel>
                <FloatingLabel className='mt-3' label='New username'>
                    <Form.Control placeholder='New username' />
                </FloatingLabel>
                <FloatingLabel className='mt-3' label='New password'>
                    <Form.Control type='password' placeholder='New password' />
                </FloatingLabel>
                <FloatingLabel className='mt-3' label='Confirm password'>
                    <Form.Control type='password' placeholder='Confirm password' />
                </FloatingLabel>
                <div className='d-flex justify-content-center mt-3'>
                    <Link to='../sign-in'>Already have an account?</Link>
                </div>

                <div className='d-flex justify-content-center mt-3 mb-3'>
                    <Button>Sign Up</Button>
                </div>
            </Form>
        </Container>
    )
}
