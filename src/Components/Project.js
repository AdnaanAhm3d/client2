import React from 'react'
import Navbar from './Navbar'
import SinglePage from './SinglePage'

import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'

import { DefaultContext } from '../Contexts/DefaultContext'
import Loader from './loader'
import Loader2 from './Loader2'
import heroimage from '../Assets/Images/Hero image.webp'
import chatheroimg from '../Assets/ChatOp/Hero image-chatOps-1.webp'

const Project = () => {
  const { toggleNav, setToggleNav } = useContext(DefaultContext)
  const [loader, setLoader] = useState(true)
  const isNewSession = !sessionStorage.getItem('sessionFlag')
  console.log(isNewSession)
  console.log(`hello`)
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem('sessionFlag', 'true')
      setLoader(false)
      console.log(isNewSession)
    }, 2000)
  }, [])
  return (
    <>
      {loader && isNewSession ? (
        <>
          <Loader2 />
        </>
      ) : (
        ''
      )}
      <Navbar />
      <div className='project-grid'>
        <Link to='/MicrosoftMigration'>
          <div className={`${!toggleNav ? 'grid indexer' : 'grid'}`}>
            {' '}
            <img src={heroimage} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Stream Migration</h1>
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
        <Link to='/AtlassianChatOps'>
          <div className={`${!toggleNav ? 'grid ' : 'grid'}`}>
            {' '}
            <img src={chatheroimg} alt='image' className='grid-image' />
            <div className='info'>
              <div className='info-box'>
                <div className='info-header'>
                  <h1>Atlassian ChatOps</h1>
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
                  Empowering teams with Chat tools to improve collaboration.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Project
