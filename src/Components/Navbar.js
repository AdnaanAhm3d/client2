import React, { useContext, useState, useEffect } from 'react'
import { DefaultContext } from '../Contexts/DefaultContext'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { toggleNav, setToggleNav } = useContext(DefaultContext)
  // console.log(toggleNav)
  // const [toggleNav, setToggleNav] = useState(false)
  const setFunc = () => {
    if (!toggleNav) {
      setToggleNav(true)
      // console.log(toggleNav)
    } else {
      // console.log(toggleNav)
      setToggleNav(false)
    }
  }

  const location = useLocation()

  const handleRouteChange = () => {
    if (!toggleNav) {
      setToggleNav(true)
    }
  }
  useEffect(() => {
    // This function will be called whenever the route changes
    handleRouteChange()
  }, [location])

  return (
    <nav class='navbar noscroll'>
      <div class='nav-center'>
        <div class='nav-header'>
          <Link to='/' class='nav-logo'>
            <h1>trishamody</h1>
          </Link>

          <div className='nav-btn-parent'>
            <button
              class={`${toggleNav ? 'show' : 'hide'} nav-btn`}
              onClick={setFunc}
            >
              <svg
                width='22'
                height='19'
                viewBox='0 0 22 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <line
                  y1='1.5'
                  x2='22'
                  y2='1.5'
                  stroke='black'
                  stroke-width='2'
                />
                <line
                  y1='9.5'
                  x2='22'
                  y2='9.5'
                  stroke='black'
                  stroke-width='2'
                />
                <line
                  y1='17.5'
                  x2='22'
                  y2='17.5'
                  stroke='black'
                  stroke-width='2'
                />
              </svg>
            </button>
            <button
              class={`${toggleNav ? 'hide' : 'show'} nav-btn`}
              onClick={setFunc}
            >
              <svg
                width='22'
                height='19'
                viewBox='0 0 18 17'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.22095 0.720947L16.7791 16.2791'
                  stroke='#010101'
                  stroke-width='2'
                  stroke-miterlimit='10'
                />
                <path
                  d='M1.22095 16.2791L16.7791 0.720947'
                  stroke='#010101'
                  stroke-width='2'
                  stroke-miterlimit='10'
                />
              </svg>
            </button>
          </div>
        </div>
        <div class={`${toggleNav ? 'hide-links' : 'show-links'} nav-links`}>
          <Link to='/project' class='nav-link'>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                stroke='black'
                stroke-width='2.5'
              />
            </svg>
            Projects
          </Link>
          <Link to='/aboutme' class='nav-link'>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                stroke='black'
                stroke-width='2.5'
              />
            </svg>
            About me
          </Link>
          <Link to='/letsconnect' class='nav-link'>
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                stroke='black'
                stroke-width='2.5'
              />
            </svg>
            Let's connect
          </Link>

          <div class='nav-link resume-link'>
            <a href='Trisha Mody_Resume.pdf' download='Trisha Mody_Resume.pdf'>
              <button className='nav-download-btn'>
                Download Resume
                <svg
                  width='14'
                  height='14'
                  viewBox='0 0 14 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M6.00001 9.74263V0.84314H8.00001V9.74263L11.9498 5.79289L13.364 7.2071L7.00001 13.5711L0.636047 7.2071L2.05026 5.79289L6.00001 9.74263Z'
                    fill='white'
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
