import React from 'react'
import Navbar from './Navbar'
import SinglePage from './SinglePage'

import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { DefaultContext } from '../Contexts/DefaultContext'

import image1 from '../Assets/Images/image-1.webp'
import image2 from '../Assets/Images/image-2.webp'
import image3 from '../Assets/Images/image-3.webp'
import image4 from '../Assets/Images/image-4.webp'
import image5 from '../Assets/Images/image-5.webp'
import image6 from '../Assets/Images/image-6.webp'
import image7 from '../Assets/Images/image-7.webp'
import image8 from '../Assets/Images/image-8.webp'
import heroimage from '../Assets/Images/Hero image.png'

const Project = () => {
  const { toggleNav, setToggleNav } = useContext(DefaultContext)

  return (
    <>
      <Navbar />
      <div className='project-grid '>
        {/* <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid grid-hero'}`}>
            {' '}
            <img src={heroimage} alt='image' className='hero-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link> */}
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={heroimage} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image4} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image5} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image7} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image1} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image6} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image2} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image8} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/microsoftmigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={image3} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Steam Migration</h1>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M2.00015 0H20.0002V18H16.0002V6.82843L3.41436 19.4142L0.585938 16.5858L13.1717 4H2.00015V0Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <p>
                  Unlocking the power of the Microsoft ecosystem for videos.
                </p>
              </div>
            </div>
          </div>
        </Link> */}
      </div>
    </>
  )
}

export default Project
