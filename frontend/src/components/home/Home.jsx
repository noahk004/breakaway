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
                <h1 className='display-3'>Introducing a new way to visualize your goals.</h1>
                <Container >
                    <p className='lead' style={{ fontSize: 1.5+'em'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Viverra vitae congue eu consequat. Accumsan lacus vel facilisis volutpat est velit. Amet nisl purus in mollis. Fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at in. Sem et tortor consequat id porta. Placerat duis ultricies lacus sed turpis. Nunc scelerisque viverra mauris in aliquam. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Diam maecenas ultricies mi eget. In metus vulputate eu scelerisque. Leo vel orci porta non pulvinar neque. Id volutpat lacus laoreet non curabitur gravida arcu. Augue interdum velit euismod in pellentesque massa placerat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque sit amet porttitor eget dolor morbi. </p>
                </Container>
                <h1 className='display-5'>Accountability made crystal clear.</h1>
                <Container >
                    <p className='lead' style={{ fontSize: 1.5+'em'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet. Viverra vitae congue eu consequat. Accumsan lacus vel facilisis volutpat est velit. Amet nisl purus in mollis. Fermentum odio eu feugiat pretium nibh ipsum consequat. At risus viverra adipiscing at in. Sem et tortor consequat id porta. Placerat duis ultricies lacus sed turpis. Nunc scelerisque viverra mauris in aliquam. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Diam maecenas ultricies mi eget. In metus vulputate eu scelerisque. Leo vel orci porta non pulvinar neque. Id volutpat lacus laoreet non curabitur gravida arcu. Augue interdum velit euismod in pellentesque massa placerat. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Pellentesque sit amet porttitor eget dolor morbi. </p>
                </Container>
                <Button href='/goals' className='mb-4'>Get Started</Button>
            </Container>

            <Container fluid className='text-center pt-5 bg-dark'>
                <h1 className='display-1 text-light'>It's time for a Breakaway.</h1>
                <p className='lead text-light' style={{fontSize: 1.5+'em'}}>
                    There is so much potential for growth. Take the first step now.
                </p>
                <Button href='/goals' className='mb-4'>Get Started</Button>
            </Container>

        </div>

    )
}
