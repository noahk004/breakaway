import React from 'react'

import Header from '../header/Header.jsx'

import Card from 'react-bootstrap/Card'

function Goal() {
    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Name of Goal</Card.Title>
                <Card.Subtitle className='mb-2'>Due date</Card.Subtitle>
                <Card.Text>
                    Description of the goal. The motivation, and any
                    other thoughts.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default function Goals() {
    return (
        <div>
            <Header username='Andrew'/>
            <div className='p-5'>
                <h1 className='ms-2 mb-4'>My Goals</h1>
                <div className='d-flex flex-wrap'>
                    <Goal />
                    <Goal />
                    <Goal />
                    <Goal />
                    <Goal />
                    <Goal />
                </div>
            </div>
        </div>
        
    )
}
