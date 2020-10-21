import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Home.css'

function Home({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart }) {
    return (
        <>
            <div className={lightBg ? 'home__home-section' : 'home__home-section darkBg'}>
                <div className='container'>
                    <div className='row home__home-row'>
                        <div className='top-line'>{topLine}</div>
                        <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                        <p className={lightTextDesc ? 'home__home-subtitle' : 'home__home-subtitle dark'}>{description}</p>

                    </div>
                </div>
                <div className='col'>
                    <div className='home__home-img-wrapper'>
                        <img src={img} alt={alt} className='home__home-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
