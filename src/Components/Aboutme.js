import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Loader from './loader'

import { useRef } from 'react'
import profilepic from '../Assets/123.webp'
import stroke from '../Assets/Images/Component 15.png'
import { Link } from 'react-router-dom'
import Loader2 from './Loader2'

const Aboutme = () => {
  const [loader, setLoader] = useState(true)

  const isNewSession = !sessionStorage.getItem('sessionFlag')
  console.log(isNewSession)

  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem('sessionFlag', 'true')
      setLoader(false)
      console.log(isNewSession)
    }, 2000)
  }, [])
  return (
    <div>
      {loader && isNewSession ? (
        <>
          <Loader2 />
        </>
      ) : (
        ''
      )}
      <Navbar />
      <div className='aboutme-section'>
        <div className='svg-profile'>
          <img src={profilepic} className='profile-gif'></img>
          {/* <img src={profilepic} alt='' className='profile-pic' /> */}
          {/* <img src={stroke} className='aboutme-icon'></img> */}
          {/* 
          <svg
            // width='418'
            // height='401'
            viewBox='0 0 418 401'
            fill='none'
            id='clip-shape'
            xmlns='http://www.w3.org/2000/svg'
            className='aboutme-icon'
          >
            {/* <path
              d='M108.584 355.088L82.7823 336.84C32.0432 300.955 3.84692 241.084 8.50012 179.112C10.794 148.561 20.9803 119.129 38.0621 93.6965L48.5268 78.1157C68.3724 48.5678 99.0583 28.0263 133.94 20.9393L165.899 14.446C207.729 5.94722 249.997 26.8938 268.569 65.3259C280.57 90.1603 302.937 108.419 329.671 115.205L336.198 116.862C384.017 129.001 417.5 172.044 417.5 221.38V228.096C417.5 238.978 415.975 249.807 412.969 260.266L410.982 267.18C392.741 330.649 338.919 377.483 273.538 386.778L252.22 389.809C201.664 396.996 150.274 384.574 108.584 355.088Z'
              fill='#F2F2F2'
              className='path1'
              id='path1'
            /> */}
          <path
            d='M309.916 355.088L335.718 336.84C386.457 300.955 414.653 241.084 410 179.112C407.706 148.561 397.52 119.129 380.438 93.6965L369.973 78.1157C350.128 48.5678 319.442 28.0263 284.56 20.9393L252.601 14.446C210.771 5.94722 168.503 26.8938 149.931 65.3259C137.93 90.1603 115.563 108.419 88.829 115.205L82.3019 116.862C34.4826 129.001 1 172.044 1 221.38V228.096C1 238.978 2.52523 249.807 5.53119 260.266L7.51841 267.18C25.7595 330.649 79.5813 377.483 144.962 386.778L166.28 389.809C216.836 396.996 268.226 384.574 309.916 355.088Z'
            stroke='black'
            className='stroke-icon'
          />
          {/* </svg> */}
        </div>

        <div className='para-section'>
          <p>I’m a passionate designer who’s constantly learning.</p>
          <p>
            I began my career as an industrial designer, but found myself
            enjoying learning new skills, tools, and softwares, more importantly
            about things that were new.
          </p>
          <p>
            UI/UX caught my attention soon after my first placement at{' '}
            <div href='#' className='para-links'>
              Samsung&nbsp;
            </div>
            as an industrial designer. Seeing the rapid turn-around time, and
            scale for impact got me hooked.
          </p>
          <p>
            I began my user interaction journey by watching Behance live
            streams, and learnt Adobe XD which helped me pass the interview
            round for a full-time role as an interaction designer at Samsung. I
            gradually made my way to leading the Samsung Galaxy Store and Alive
            Intelligence project — that received an A2 grade patent.
          </p>
          <p>
            Seeing my design reach millions of users overnight and the
            opportunity for impact never seizes to amaze me. Since Samsung, I
            have lead multiple commercialisation projects at{' '}
            <Link to='/singleproject' href='#' className='para-links'>
              Microsoft&nbsp;
            </Link>
            where I designed end-to-end solutions for B2B (enterprise) use cases
            for admins along with B2C products for their consumers.
          </p>
          <p>
            Over time, I’ve realised that I gravitate towards the more technical
            side of things, so, I’ve pursued an opportunity at{' '}
            <div href='#' className='para-links'>
              Atlassian&nbsp;
            </div>
            and am constantly trying to step outside my comfort zone to expand
            my horizons.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
