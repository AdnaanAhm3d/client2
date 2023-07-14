import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
// import profilegif from '../Assets/Videogif.gif'
import profilepic from '../Assets/1.webp'
import { useForm } from 'react-hook-form'
import axios from 'axios'
function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [tel, setTel] = useState('')
  const [validator, setValidator] = useState(false)
  const form = useRef()
  const [sent, setSent] = useState(false)

  const { register, handleSubmit } = useForm()

  const checkState = () => {
    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      text.trim() !== '' &&
      tel.trim() !== ''
    ) {
      // setValidator(true)
    }
  }

  checkState()

  const handleChange = () => {
    if (
      // name.trim() !== '' &&
      email.trim() !== '' &&
      text.trim() !== ''
      // tel.trim() !== ''
    ) {
      setValidator(true)
    }
  }

  const [formState, setFormState] = useState({})
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const url = 'https://api.trishamody.com/trishamody/contact-us'

  const sendData = (data) => {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setSent(true)
        console.log(`Message sent successfully`)
        // Handle response
      })
      .catch((error) => {
        console.error(`failure`)
        // Handle error
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      name: name,
      email: email,
      contactNumber: tel,
      message: text,
    }
    sendData(data)
  }

  return (
    <>
      <Navbar />

      <div className='contact-center'>
        <div className='contact-section'>
          <div className='contactinfo-section'>
            <div className='svg-profile'>
              <img src={profilepic} className='profile-gif'></img>

              <svg
                viewBox='0 0 418 401'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='aboutme-icon'
              >
                {/* <path
                d='M108.584 355.088L82.7823 336.84C32.0432 300.955 3.84692 241.084 8.50012 179.112C10.794 148.561 20.9803 119.129 38.0621 93.6965L48.5268 78.1157C68.3724 48.5678 99.0583 28.0263 133.94 20.9393L165.899 14.446C207.729 5.94722 249.997 26.8938 268.569 65.3259C280.57 90.1603 302.937 108.419 329.671 115.205L336.198 116.862C384.017 129.001 417.5 172.044 417.5 221.38V228.096C417.5 238.978 415.975 249.807 412.969 260.266L410.982 267.18C392.741 330.649 338.919 377.483 273.538 386.778L252.22 389.809C201.664 396.996 150.274 384.574 108.584 355.088Z'
                fill='#F2F2F2'
              /> */}
                <path
                  d='M309.916 355.088L335.718 336.84C386.457 300.955 414.653 241.084 410 179.112C407.706 148.561 397.52 119.129 380.438 93.6965L369.973 78.1157C350.128 48.5678 319.442 28.0263 284.56 20.9393L252.601 14.446C210.771 5.94722 168.503 26.8938 149.931 65.3259C137.93 90.1603 115.563 108.419 88.829 115.205L82.3019 116.862C34.4826 129.001 1 172.044 1 221.38V228.096C1 238.978 2.52523 249.807 5.53119 260.266L7.51841 267.18C25.7595 330.649 79.5813 377.483 144.962 386.778L166.28 389.809C216.836 396.996 268.226 384.574 309.916 355.088Z'
                  stroke='black'
                  className='stroke-icon'
                />
              </svg>
            </div>
            <div className='contact-info'>
              <h3>Get In Touch</h3>
              <div className='info-line'>
                <span>📨</span>

                <h4>trisha1994@gmail.com</h4>
              </div>
              <div className='info-line'>
                <span>📱</span>
                <h4>(+91) 95-99-53-7681</h4>
              </div>
              <div className='info-line'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='contact-icons'
                    viewBox='0 0 16 16'
                  >
                    {' '}
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />{' '}
                  </svg>{' '}
                </span>
                <a
                  href='https://www.linkedin.com/in/trisha-mody-1b744abb'
                  target='_blank'
                >
                  <h4>LinkedIn</h4>
                </a>
              </div>
              <div className='info-line'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    className='contact-icons'
                    fill='0057F2'
                  >
                    <path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' />
                  </svg>
                </span>
                <a
                  href='https://www.linkedin.com/in/trisha-mody-1b744abb'
                  target='_blank'
                >
                  <h4>Behance</h4>
                </a>
              </div>
              <div className='info-line'>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='bi bi-instagram'
                    viewBox='0 0 16 16'
                    className='contact-icons'
                  >
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                  </svg>
                </span>
                <a
                  href='https://www.linkedin.com/in/trisha-mody-1b744abb'
                  target='_blank'
                >
                  <h4>Instagram</h4>
                </a>
              </div>
            </div>
          </div>
          <div className='form-section'>
            {sent ? (
              <div className='form-sent'>
                <svg
                  width='208'
                  height='208'
                  viewBox='0 0 208 208'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    cx='104'
                    cy='104'
                    r='103'
                    stroke='#5BCE00'
                    stroke-width='2'
                  />
                  <path
                    d='M61 105.5L89 133.5L147.5 75'
                    stroke='#65D10F'
                    stroke-width='2'
                  />
                </svg>
                <div className='form-message'>
                  <h3>Message delivered!</h3>
                  <p>
                    Thanks for reaching out, I’ll get back <br /> to you as soon
                    as possible!
                  </p>
                </div>
              </div>
            ) : (
              <form
                action='/submit-form'
                ref={form}
                className='contact-form'
                onChange={handleChange}
                onSubmit={submitHandler}
              >
                <div className='contact-column'>
                  <label for='name' className='contact-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    {...register('name')}
                    className='contact-input'
                    // placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='email' className='contact-label'>
                    Email ID
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='user_email'
                    className='contact-input'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='name' className='contact-label'>
                    Contact no.
                  </label>
                  <input
                    type='tel'
                    id='tel'
                    name='user_tel'
                    className='contact-input'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className='contact-column'>
                  <label for='message' className='contact-label'>
                    Message
                  </label>
                  <input
                    type='text'
                    id='message'
                    name='message'
                    className='contact-input'
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  value='Send'
                  className={`${
                    validator ? `contact-button validator` : `contact-button`
                  }`}
                >
                  Send message
                  <svg
                    width='8'
                    height='8'
                    viewBox='0 0 15 15'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className={`${
                      validator ? 'validator-svg' : 'contact-button-svg'
                    }`}
                  >
                    <path
                      d='M1 13.5L13 1.5M13 1.5H1M13 1.5V13.5'
                      stroke-width='2.5'
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
function App() {
  return <ContactForm />
}
export default App
