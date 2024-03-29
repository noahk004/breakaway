import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

export default function ForgotPassword() {
    return (
        <Container className='d-flex align-items-center vh-100' style={{ maxWidth: 400 + 'px' }}>
            <Form className='w-100'>
                <Link to='/' className='d-flex justify-content-end'>
                    <CloseButton />
                </Link>
                <h1 className='d-flex justify-content-center mt-5 mb-4'>Forgot Password</h1>
                <FloatingLabel className='mt-3' label='Email'>
                    <Form.Control placeholder='Email' />
                </FloatingLabel>
                <div className='d-flex justify-content-center mt-3'>
                    <Link to='../sign-in'>Remember your password?</Link>
                </div>
                <div className='d-flex justify-content-center mt-3 mb-3'>
                    <Button>Continue</Button>
                </div>
            </Form>
        </Container>
    )
}
