import React from 'react'
import Header from '../header/Header.jsx'

import './Home.css'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import libraryImage from '../../assets/img/library-image.jpg'
import codingImage from '../../assets/img/coding-image.jpg'
import liftingImage from '../../assets/img/lifting-image.jpg'

export default function Home() {
    return (
        <div className='home-body'>
            <Header username={"Andrew"} fixed='top' />

            <Carousel fade>
                <Carousel.Item>
                    <img src={libraryImage} className='cover-image' alt="" />
                    <Carousel.Caption>
                        <h1 className='display-4'>Knowledge</h1>
                        <p className='lead'>
                            Knowledge is so incredibly accessible in today's information-driven
                            age. However, we often overlook the value of information, not utilizing
                            the vast sea of information available at our fingertips and passing up
                            golden opportunities for learning.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={codingImage} className='cover-image' alt="" />
                    <Carousel.Caption>
                        <h1 className='display-4'>Innovation</h1>
                        <p className='lead'>
                            Every individual possesses the ability to create, be it towering buildings,
                            intricate machinery, or soul-stirring music. Equipped with eyes, hands, and
                            a brain, it would be a shame not to put them to good use.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={liftingImage} className='cover-image' alt="" />
                    <Carousel.Caption>
                        <h1 className='display-4'>Fitness</h1>
                        <p className='lead'>
                            The human body is capable of many things not only mentally but physically.
                            Exercise is not only a great pastime but is considered to be the #1 drug,
                            providing benefits in sleep quality, energy, mood, longevity, and overall
                            quality of life.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container fluid className='text-center pt-5'>
                <h1 className='display-1'>It's time for a Breakaway.</h1>
                <p className='lead' style={{fontSize: 1.5+'em'}}>
                    There is so much potential for growth. Take the first step now.
                </p>
                <Button className='mb-4'>Get Started</Button>
            </Container>

            <Container fluid className='text-center pt-5 bg-dark'>
                <h1 className='display-1 text-light'>It's time for a Breakaway.</h1>
                <p className='lead text-light' style={{fontSize: 1.5+'em'}}>
                    There is so much potential for growth. Take the first step now.
                </p>
                <Button className='mb-4'>Get Started</Button>
            </Container>

        </div>

    )
}
