import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Loader from './loader'
import Loader2 from './Loader2'
import Navbar from './Navbar'
// images
import image3 from '../Assets/Images/image-3.webp'
import jtbd from '../Assets/Images/JTBD_high res_new.webp'
import streamadmincenter from '../Assets/Images/project-1/compressed-images/Stream admin center.webp'
import scanningcontainersimg from '../Assets/Images/project-1/compressed-images/Scanning containersimg.webp'
import spac from '../Assets/Images/project-1/compressed-images/SP AC.webp'
import spac2 from '../Assets/Images/project-1/compressed-images/SP AC-2.webp'

import streamtilesettings from '../Assets/Images/project-1/compressed-images/Stream tile settings.webp'
import m365 from '../Assets/Images/project-1/compressed-images/M365 Stream Tile.webp'
import restrictvideouploadonstream from '../Assets/Images/project-1/compressed-images/Restrict video upload on Stream.webp'
import messageadminsettings from '../Assets/Images/project-1/compressed-images/Message admin settings.webp'
import enduserimage from '../Assets/Images/project-1/compressed-images/End user message.webp'
import mobilemessage from '../Assets/Images/mobile message.webp'
import mobileappswitcher from '../Assets/Images/Mobile app switcher.webp'
import heroimg from '../Assets/Images/Hero image.png'
// videos

import migratingcontainers from '../Assets/Videos/Migrating containers-1.mp4'
import takethetourscans from '../Assets/Videos/Take the tour_scans.mov'
import scanningcontainers from '../Assets/Videos/scanning-container-1.mp4'
import tourmigrations from '../Assets/Videos/Take the tour_migrations.mov'
import northstar from '../Assets/Videos/North star-1.mp4'

const SinglePage = () => {
  const [collapsed, setCollapsed] = useState(true)
  const [collapsedJ, setCollapsedJ] = useState(true)

  const [collapsedB, setCollapsedB] = useState(true)
  const [collapsedN, setCollapsedN] = useState(true)
  const [collapsedM, setCollapsedM] = useState(true)

  const collapsedFuncM = () => {
    if (collapsedM) {
      setCollapsedM(false)
    } else {
      setCollapsedM(true)
    }
  }

  const collapsedFunc = () => {
    if (collapsed) {
      setCollapsed(false)
    } else {
      setCollapsed(true)
    }
  }

  const collapsedBFunc = () => {
    if (collapsedB) {
      setCollapsedB(false)
    } else {
      setCollapsedB(true)
    }
  }

  const collapsedNFunc = () => {
    if (collapsedN) {
      setCollapsedN(false)
    } else {
      setCollapsedN(true)
    }
  }

  const collapsedJFunc = () => {
    if (collapsedJ) {
      setCollapsedJ(false)
    } else {
      setCollapsedJ(true)
    }
  }

  const [loader, setLoader] = useState(true)
  // const [loader, setLoader} = useContext(DefaultContext)
  const isNewSession = !sessionStorage.getItem('sessionFlag')
  console.log(isNewSession)
  // seta(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      sessionStorage.setItem('sessionFlag', 'true')
      setLoader(false)
      console.log(isNewSession)
    }, 2000)

    // return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {loader ? (
        <>
          <Loader2 />
        </>
      ) : (
        ''
      )}
      <Navbar />

      <div className='project-div'>
        <img src={heroimg} alt='header' className='img-1' />
        <div className='project-center'>
          <h1 className='project-header'>
            Microsoft Stream Migration: <br /> Admin Experience
          </h1>
          <div className='the-brief'>
            <h3 className=''>Brief</h3>
            <p className=''>
              Enabling 3 million active tenants to migrate content from Stream
              (Classic) to Stream (on SharePoint).
            </p>
          </div>
          <div className='the-problem'>
            <h3>The Problem</h3>
            <p>
              Stream (Classic) was isolated from the rest of the Microsoft 365
              collaborative experiences, since it was stored on Azure, while
              other apps were stored on SharePoint. This meant that videos
              weren’t managed the same way as other content.
            </p>
            <p className='problem-spacer'>
              More importantly, services that helped with governance and
              compliance that were available in M365 didn’t apply to Classic,
              making it a challenge for customers to integrate videos into their
              workflows.
            </p>
            <img src={spac} alt='' className='img-project problem-img' />
          </div>
          <div className='the-solution'>
            <h3>The Solution</h3>
            <p>
              The new Stream, i.e. Stream (on SharePoint) is built on the same
              storage platform that all other Microsoft apps use; OneDrive and
              SharePoint, enabling users to seamlessly integrate videos within
              other file types and applications.
            </p>
          </div>
          <div className='moving-from-stream'>
            <h3>Moving from Stream (Classic) to Stream (on SharePoint)</h3>
            <p>
              Content from Classic also had to be migrated to the newest version
              of Stream. To do this a migration tool needed to be built to
              ensure that all the features and metadata stored on Classic would
              be available on SharePoint. This project summarises the
              requirements, guidance, functionality and usage of the tool.
            </p>
          </div>
          <div className='jtbd'>
            <h3>JTBD</h3>
            <div className='jtbd-container indent'>
              <button className='collapse-btn jtb-' onClick={collapsedJFunc}>
                <h4>
                  <div className='svg-indent'>
                    <svg
                      width='11'
                      height='9'
                      viewBox='0 0 11 9'
                      fill='none'
                      className={`${
                        collapsedJ
                          ? 'fre-diamond pointercollapsed'
                          : 'fre-diamond pointeropen'
                      }`}
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5.5 8.5L0.736861 0.249999L10.2631 0.25L5.5 8.5Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                  TLDR; What are JTBD’s?
                </h4>
              </button>
              <p className={`${collapsedJ ? 'fre-scan-extra' : ''}`}>
                JTBD framework is a useful tool for businesses to gain a deeper
                understanding of their customers' needs and preferences and
                design products or services that better meet those needs.
              </p>
            </div>
            <img src={jtbd} alt='' className='jtbd-img' />
            {/* <div className='table'>
              <div className='table-icon'>
                <svg
                  width='128'
                  height='141'
                  viewBox='0 0 128 141'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    width='128'
                    height='128'
                    rx='16'
                    transform='matrix(-1 0 0 1 128 13)'
                    fill='#3686FF'
                  />
                  <g clip-path='url(#clip0_349_6525)'>
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M62.1417 157.027C51.4118 157.027 40.7395 156.499 30.41 155.458L30.4054 155.438L29.8569 155.372C28.296 155.177 26.7003 155.023 25.1571 154.875C21.0863 154.484 16.8766 154.079 12.9501 152.877L12.2565 152.665L12.1885 152.838C12.0864 152.786 11.9792 152.731 11.8652 152.678C12.483 142.585 13.5135 132.679 14.4441 124.291L14.4823 123.948L14.2545 123.689C12.9388 122.19 12.454 120.934 12.7743 119.851C15.3981 114.373 15.9543 107.383 16.4923 100.623C17.6074 86.6119 18.6606 73.3778 36.8506 72.805L36.8797 72.8037L37.0715 72.7904C40.8648 72.5303 44.7872 72.2613 48.2912 70.5167L48.6995 70.3135L48.7237 69.8579C48.7532 69.3082 49.4298 68.6543 49.9733 68.129C50.1605 67.9482 50.3371 67.7774 50.4959 67.6064L50.5292 67.5705L50.5577 67.531C51.3778 66.391 52.3408 65.7106 53.134 65.7106C54.2892 65.7106 54.8489 67.161 55.0798 68.0256L55.4437 69.3885L56.4071 68.3581C58.6708 65.9377 59.7537 63.2758 59.6322 60.4372L59.7143 60.4116L59.609 59.7335C59.4101 58.5566 59.5423 57.6835 60.0024 57.139C60.541 56.5014 61.5972 56.1914 63.2314 56.1914C64.3112 56.1914 65.4863 56.3276 66.523 56.4478C66.862 56.487 67.1887 56.5249 67.4972 56.5566C69.5726 56.7752 71.6943 57.1687 73.7459 57.5491L74.0339 57.6025L73.839 58.1334L74.3375 58.478C75.0016 58.9374 75.4963 59.8589 75.6947 61.006L75.7035 61.0578L75.7194 61.1082C76.0144 62.0436 76.1263 63.0882 76.2449 64.1941C76.4441 66.0549 76.6501 67.9789 77.7635 69.6352L78.4325 70.6303L79.0739 69.6171C79.3868 69.1228 79.8063 68.8823 80.3564 68.8823C81.8402 68.8823 83.6524 70.5238 83.9744 71.7961L84.0778 72.2047L84.4757 72.3431C87.208 73.2949 89.4593 73.9894 91.4456 74.6022C96.4328 76.1408 98.936 76.9131 100.542 79.1768C102.195 81.5054 103.031 85.5699 104.422 93.6564C105.944 102.419 106.961 111.426 107.945 120.137C109.18 131.078 110.457 142.387 112.749 153.357C112.589 153.521 112.469 153.684 112.386 153.847C111.374 153.936 110.345 154.017 109.344 154.096C107.679 154.227 105.956 154.363 104.273 154.539L103.899 154.579L103.816 154.708C103.663 154.72 103.511 154.736 103.363 154.751C103.125 154.774 102.896 154.797 102.673 154.81L102.605 154.675L102.062 154.736C88.5438 156.256 75.1126 157.027 62.1417 157.027'
                      fill='white'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M39.0618 102.862C39.0926 102.808 39.1956 102.827 39.1873 102.896C38.7391 105.873 37.6518 108.757 36.9901 111.696L37.0102 111.752C37.3479 112.719 38.1242 116.205 36.2258 115.236L36.074 116.031C33.6046 129.016 31.6115 142.14 31.8894 155.396C31.9302 156.451 31.3782 159.577 29.8868 158.046C28.7914 156.208 29.2737 153.954 29.1874 151.913C29.3757 140.708 30.5164 129.418 33.4456 118.579L33.5667 118.204C35.5044 112.244 35.4971 114.153 34.5866 107.499C34.5646 106.885 34.1209 105.551 34.705 105.182C35.2313 105.514 35.4058 106.49 35.5965 107.068L35.6096 107.107C35.8928 107.934 36.1454 108.768 36.3957 109.605C37.2275 107.357 37.8959 104.963 39.0618 102.862ZM70.0213 154.239C71.0969 153.921 72.0654 155.145 71.6896 156.148C71.4464 157.194 69.4146 157.843 69.3373 156.385C68.7816 155.79 68.9619 154.697 69.7209 154.367C69.7132 154.366 69.9511 154.27 70.0213 154.239ZM96.0808 94.9278C96.1209 94.7895 96.2356 94.9155 96.2047 95.0034C96.4447 96.2197 96.2496 97.5575 96.3046 98.821C96.4583 98.4591 96.6573 98.1133 96.9159 97.7892C97.14 97.5086 97.5468 97.9095 97.3136 98.187C96.7346 98.8762 96.4813 99.7071 96.371 100.571C97.2206 118.602 99.7225 136.602 104.014 154.139C104.945 156.557 101.193 157.537 101.604 154.903C98.7651 142.603 96.5012 130.044 95.9949 117.4C95.3119 111.851 95.581 106.07 95.6746 100.449C95.6784 98.6183 95.8554 96.742 96.0808 94.9278ZM57.8751 58.1484C58.9294 58.2321 59.5405 59.9829 59.7507 60.9433C60.5215 64.708 58.4493 68.6261 55.7222 71.0949C59.7489 74.7242 64.1216 77.9586 68.8407 80.6368C69.4826 79.9094 70.6165 80.0139 71.4066 80.4525C73.9617 78.0345 76.5503 75.6679 79.0379 73.1824C75.1706 70.7352 74.8475 65.6967 75.6217 61.5972L75.6455 61.4733C75.704 61.1214 76.1941 61.2492 76.2219 61.5514L76.2393 61.7461C76.4714 64.4122 76.4921 67.2906 77.9742 69.6202C79.6605 66.956 83.7016 69.6824 84.2944 72.0258C101.242 77.9285 101.401 74.4495 104.755 93.9454C108.146 113.876 109.105 134.149 113.077 153.99C113.126 154.552 112.616 155.012 112.107 155.089C110.164 155.348 110.104 150.095 109.656 148.628C108.7 143.152 107.978 137.638 107.356 132.115C105.445 115.755 104.791 99.147 101.092 83.0544C100.72 81.7004 100.19 80.361 99.2531 79.293C95.3494 75.0435 88.5787 75.9726 84.3479 72.1855C84.7576 73.4476 84.7906 74.8426 84.71 76.161C84.2471 83.1868 83.9677 90.2259 83.4705 97.2493C83.4128 98.0379 82.4585 98.2972 82.0117 97.6445C78.4712 92.4751 74.8376 87.3839 71.3865 82.152C70.8304 82.4158 70.2372 82.536 69.6004 82.4096C68.5906 83.685 69.0268 87.0212 68.6971 88.7705L68.5748 90.1088C66.6894 110.854 65.3055 131.652 65.4081 152.493L65.4119 153.166C65.411 153.805 65.46 154.468 65.4123 155.105C64.9812 157.177 62.9427 156.436 63.0571 154.588C62.9663 131.236 63.9308 107.733 67.7825 84.6721C64.3054 89.0565 60.8322 93.4441 57.3535 97.8275C57.0932 98.1582 56.5985 98.0128 56.392 97.7067L56.3789 97.6865L56.4645 97.9161C56.2553 97.849 56.0726 97.7217 55.883 97.6118C54.134 93.3157 53.0022 88.8096 51.6281 84.3894C50.4813 80.0552 48.7619 75.8039 48.1284 71.3625L48.0997 71.3505V71.3505C46.3788 72.216 44.4722 72.7715 42.5453 72.8045C40.3663 73.3661 38.0744 73.6309 35.9007 73.9163C20.0991 74.5927 16.975 90.2882 17.1195 103.298L17.0921 103.919C16.927 107.788 16.8491 111.724 15.8903 115.488C15.5363 116.198 14.4165 120.765 13.2901 119.143C12.3404 120.412 12.6378 121.152 13.9034 121.936C16.114 123.835 18.2711 126.858 18.6965 129.973C18.7756 130.548 17.9506 131.053 17.6573 130.411L17.5109 130.092C16.6544 128.232 15.7488 126.412 14.5255 124.796C14.4714 124.887 14.3977 124.963 14.3095 125.014C14.0156 132.722 13.4204 140.417 12.8882 148.111C12.5972 149.214 13.1457 156.214 10.9153 154.485L10.8468 154.43C10.3374 153.351 10.6439 152.046 10.748 150.894L11.0615 147.205V147.205C11.7385 139.675 12.2927 132.131 13.228 124.627L13.1546 124.543C12.0789 123.296 11.0739 121.649 11.6036 119.986C11.8751 118.985 12.7754 118.487 13.3844 117.723C16.6886 100.288 10.9801 73.2922 36.3875 72.4445L37.4511 72.3708C40.8761 72.1278 44.4033 71.7815 47.504 70.2378C47.5623 69.1492 48.8052 68.2268 49.484 67.4955C51.5751 64.589 54.382 64.4433 55.397 68.2454C58.0962 65.3419 59.1864 61.9706 57.8751 58.1484ZM69.2504 142.621C70.5661 141.353 72.3289 143.664 69.9431 145.296C69.5103 146.09 68.3272 145.53 68.5284 144.7L68.5259 144.56C68.5084 143.837 68.4371 142.944 69.2504 142.621ZM69.3905 125.689C71.7927 124.915 71.1941 129.292 69.6093 129.889C68.6517 130.365 68.3235 129.174 68.4984 128.447C67.8763 127.502 68.4461 126.257 69.3905 125.689ZM69.3518 113.112C68.9086 111.237 71.599 110.925 71.6146 112.884C71.7014 113.707 70.9505 114.243 70.7607 114.959C70.7207 115.425 70.1491 115.754 69.7833 115.365C69.173 114.715 69.0418 113.833 69.3518 113.112ZM69.0139 96.4495C69.2881 94.2543 71.7716 95.1797 70.8946 95.5454C70.8769 95.5644 70.8585 95.5831 70.8391 95.602C71.8421 95.6994 71.7718 96.8778 71.6601 97.6316C71.2666 99.3191 68.7169 97.7838 69.0139 96.4495ZM53.7405 89.467C53.9446 90.2055 54.1502 90.9435 54.3605 91.6801C54.9024 93.5779 55.5462 95.4253 56.2252 97.2696C55.3944 94.6695 54.5666 92.0685 53.7405 89.467ZM55.1133 68.5647C52.7355 64.5704 51.4523 69.0736 49.7279 70.8435C50.9462 79.5569 54.6331 87.6964 57.1425 96.096C60.6387 91.6254 64.1387 87.1578 67.6358 82.688C67.845 82.4201 68.0465 82.1392 68.2553 81.8643C63.8652 79.3264 59.7259 76.3259 56.2416 72.6032C55.5714 72.7466 55.0574 71.8503 54.5764 71.4773L54.5259 71.4358C54.0809 71.0607 53.6684 70.4689 53.9486 69.8854C53.9114 69.8064 53.9679 69.7336 54.0447 69.7096C54.3926 69.3274 54.7617 68.959 55.1133 68.5647ZM82.8459 76.9347C83.0781 74.0839 82.608 69.9967 78.7759 70.6471C79.4583 71.5822 80.7415 71.7333 81.4173 72.6312C81.6646 73.0422 81.361 73.5514 80.9114 73.6295C77.9369 76.3243 75.125 79.0848 72.0881 81.738C75.4628 86.1088 78.7026 90.5624 81.9844 95.0006C82.2111 88.9761 82.6096 82.9578 82.8459 76.9347Z'
                      fill='black'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M92.8384 35.715C92.3441 27.5999 89.7119 18.3995 81.9649 14.4152C64.8862 7.5583 42.4313 24.8259 41.2425 42.4661C40.8281 48.5044 44.1794 55.1026 50.3037 56.7814C51.6653 58.5861 53.7245 59.6882 55.757 60.6448C79.965 73.2093 95.6023 62.9957 92.8384 35.715V35.715Z'
                      fill='white'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M98.3533 30.6673C97.4978 28.2903 96.5941 25.9315 95.6434 23.591C94.7175 21.3131 93.8811 18.986 92.7313 16.816C85.8638 3.85584 73.3755 3.85584 66.9201 5.54925C63.5724 4.10633 57.3021 4.51334 53.8163 5.8154C48.1731 7.92329 41.294 16.2153 38.942 19.9408C33.7491 28.1663 30.5084 39.1144 33.9578 48.6194C34.4086 49.8617 34.9836 51.0123 35.631 52.1211C35.2232 52.674 34.7538 53.1977 34.2339 53.7122C32.6888 55.2415 31.1436 56.7204 29.8089 58.4453C28.4825 60.1594 27.3828 61.9823 26.5642 63.992C25.0207 67.7823 24.9463 72.074 26.987 75.6905C28.7625 78.8373 31.9076 81.1806 35.451 81.404C35.633 81.4294 35.8151 81.4526 35.9981 81.471C36.4676 82.2446 37.0401 82.9569 37.6935 83.578C39.6953 85.4827 44.4671 86.4599 47.1888 86.5225C47.3283 86.6347 47.4692 86.7469 47.61 86.8578C49.2754 88.169 51.0229 89.4918 52.9347 90.4247C54.2297 91.0574 55.9277 91.5858 57.2788 91.1292C57.8917 91.5388 58.8972 91.4527 59.5049 91.1174C60.5038 90.5669 61.3163 89.5753 61.8106 88.5603C63.0091 86.0959 62.7209 83.3992 62.4131 80.7665C62.074 77.8584 61.748 74.9491 61.4167 72.0411C61.1572 69.7671 60.886 67.4553 60.1948 65.2648C59.8374 64.1298 59.3693 63.0391 58.7641 62.0137C58.7798 61.9276 58.7772 61.8415 58.7524 61.7606C58.5542 61.1161 58.1447 60.7782 57.6596 60.3399C57.597 60.2838 57.5344 60.2264 57.4731 60.1676C57.2305 59.8911 56.971 59.634 56.6932 59.4162C56.5863 59.3079 56.4806 59.1983 56.375 59.0887C55.4973 58.169 54.6679 57.2022 53.9311 56.1663C53.2164 55.1618 52.5709 54.1129 51.9566 53.0444C51.332 51.9576 50.9186 50.7586 50.2952 49.6797C50.2417 49.5871 50.1061 49.5688 50.0304 49.6458C49.8374 49.8454 49.7135 50.0672 49.737 50.3007L49.6405 50.3151C49.604 49.9628 49.2793 49.6758 48.8385 49.7528C48.1786 49.8676 47.6361 49.9106 47.0649 49.6915C47.1653 49.0248 47.2579 48.3568 47.3492 47.6875C47.5161 46.456 47.6713 45.2205 47.8043 43.985C48.1264 44.062 48.4459 44.1729 48.7589 44.3138C49.2049 44.5134 49.6262 44.7821 49.9861 45.1122C50.3408 45.4384 50.586 45.878 51.019 46.105C51.5171 46.3646 52.1183 45.9354 51.9723 45.3718C51.6762 44.2329 50.0005 43.5806 48.9637 43.3653C48.6077 43.2909 48.2438 43.2596 47.88 43.2674C47.9621 42.4742 48.0351 41.681 48.0951 40.8865C48.1238 40.5108 48.1499 40.135 48.1747 39.758C48.9806 39.514 49.844 39.441 50.6825 39.5558C50.959 39.7763 51.2355 39.9941 51.5028 40.2146C52.3518 40.9165 53.1969 41.6223 54.0315 42.3412C54.1071 42.4051 54.1815 42.469 54.2571 42.5342C54.7527 42.9609 55.3708 42.5382 55.2874 41.9341C54.6066 36.9843 57.6374 33.047 61.1859 29.9967C65.1139 26.619 72.2553 26.2257 76.9266 20.3751C79.0781 20.8131 83.8815 22.1142 85.8638 25.274C88.6389 29.7019 88.2764 33.6693 88.4877 38.6921C88.6989 43.7189 89.2362 48.9622 88.0951 53.9185C87.0427 58.4886 84.1932 62.3933 79.7722 64.1885C79.6627 64.2329 79.5518 64.2759 79.441 64.3177C77.1549 65.18 74.6601 65.424 72.2553 64.97C69.5936 64.4664 67.3713 63.2479 65.1569 61.7489C65.0291 61.6641 64.8427 61.8389 64.9392 61.9667C67.8578 65.8363 73.5907 67.1292 78.1382 66.1076C78.3507 66.0594 78.562 66.0072 78.772 65.9498C77.7548 68.8761 77.9595 72.0881 79.2845 74.9374C80.0813 76.6517 81.2967 78.135 82.7769 79.3053C84.4084 80.5943 86.4324 81.6354 87.5644 83.4449C88.6011 85.1031 88.2934 86.9661 86.5185 87.9237C86.0711 88.1663 85.899 88.9504 86.3424 89.2948C86.5119 89.4253 86.6815 89.5584 86.8549 89.6888C87.8487 90.439 90.5782 91.848 91.0203 91.9002C94.9457 92.3659 97.5852 89.4827 99.2767 86.0815C101.263 82.0894 100.746 77.2244 98.5581 73.4227C96.8027 70.3725 93.3455 67.3666 94.7201 63.5062C95.2104 62.1272 96.2133 60.9517 97.1875 59.8898C98.2986 58.6804 99.4932 57.5479 100.559 56.2955C101.618 55.0522 102.557 53.6993 103.081 52.1389C103.846 49.8584 103.466 47.3927 102.89 45.1161C101.658 40.229 100.058 35.407 98.3533 30.6673Z'
                      fill='black'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M76.3655 56.1821C75.4888 55.8243 74.7066 55.2275 74.1347 54.4652C73.9359 54.2001 73.8843 53.9203 73.9261 53.6643C73.973 53.3765 74.1432 53.1156 74.3753 52.9406C74.6082 52.7651 74.8994 52.6785 75.181 52.7227C75.4257 52.761 75.6693 52.895 75.8621 53.173L75.9023 53.2286C76.2423 53.6887 76.6854 54.0663 77.1902 54.3096C77.6767 54.5442 78.2209 54.6536 78.784 54.59C79.8565 54.4688 80.5957 53.8885 81.3814 53.1006C81.4788 53.0011 81.5762 52.8985 81.6742 52.7942C81.736 52.6997 81.8218 52.639 81.9171 52.6071C82.0229 52.5718 82.1426 52.5738 82.2522 52.612C82.3579 52.6489 82.4524 52.7189 82.5158 52.812C82.5761 52.9004 82.6102 53.0097 82.5991 53.1355C82.5272 53.9521 82.1005 54.6808 81.4943 55.2531C80.821 55.8886 79.9286 56.3283 79.0884 56.4825C78.1627 56.6523 77.2195 56.5307 76.3655 56.1821V56.1821ZM79.5251 43.5847C80.5098 44.1835 82.0104 45.5798 80.951 47.0644C79.7039 48.3734 77.9085 46.8726 77.0237 46.1938C76.2033 45.6677 75.2816 47.0207 76.0427 47.635C82.436 52.3702 85.0306 43.7412 80.0231 42.8806C79.4718 42.7857 79.267 43.3994 79.5251 43.5847ZM68.0682 38.0764C68.177 36.7253 70.234 36.4185 70.4386 37.7555C70.6218 38.9531 70.4061 40.0533 69.8669 41.1316C69.3516 42.1617 68.0565 41.6811 67.9586 40.7431C67.8273 39.4857 68.0005 38.9169 68.0682 38.0764ZM83.726 37.4782C84.0128 37.1025 84.4268 36.846 84.9229 36.991C86.4728 37.4441 86.016 39.6454 85.4717 40.7169C85.1759 41.2987 84.2198 41.4463 83.7878 40.9339C83.0836 40.0985 82.7463 38.43 83.6416 37.607C83.6659 37.5645 83.6929 37.5216 83.726 37.4782ZM69.845 32.1643L70.0899 32.1215C70.8473 31.9904 71.789 31.8645 72.3248 32.4737C72.609 32.7967 72.7068 33.3971 72.3248 33.7063C71.6529 34.2503 70.9101 34.0395 70.1049 34.0855C69.4414 34.1236 68.8037 34.2335 68.1645 34.4163C66.7623 34.8172 65.6198 35.5491 64.4222 36.3527C64.2651 36.4581 64.1047 36.2571 64.1797 36.1101C64.871 34.7555 66.2107 33.6428 67.5526 32.9645C68.2689 32.6024 69.0526 32.3021 69.845 32.1643ZM82.3131 31.5575L82.5005 31.5959C84.5398 32.0223 87.1893 32.8742 88.155 34.878C88.1918 35.1614 88.1529 35.2221 88.1213 35.2618L88.1107 35.275C88.0847 35.3089 88.0639 35.3556 87.9411 35.3941C87.9071 35.386 87.8727 35.3774 87.8379 35.3683C87.3952 35.2522 87.045 35.0924 86.7059 34.9265L86.3383 34.7453C85.9118 34.5361 85.4815 34.3345 85.0255 34.1857C84.0523 33.8681 83.0514 33.6444 82.0349 33.525C81.8146 33.4991 81.6024 33.4247 81.4351 33.2972C81.2762 33.1762 81.1548 33.0087 81.0995 32.786C81.0278 32.4978 81.0484 32.2796 81.203 32.0196C81.3192 31.8244 81.4855 31.689 81.6765 31.6113C81.8711 31.5321 82.0928 31.5134 82.3131 31.5575Z'
                      fill='black'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_349_6525'>
                      <rect
                        width='119'
                        height='141'
                        rx='8'
                        transform='matrix(-1 0 0 1 119 0)'
                        fill='white'
                      />
                    </clipPath>
                  </defs>
                </svg>
                <h3>Admin</h3>
              </div>
              <div className='table-pointers'>
                <div className='pointer'>
                  <div className='pointer-number'>1</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>Plan the migration</h4>
                    <p className='pointer-para'>
                      Assessing the scope, identifying content, determining the
                      timeline
                    </p>
                  </div>
                </div>
                <div className='pointer'>
                  <div className='pointer-number'>2</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>
                      Prepare the content for migration
                    </h4>
                    <p className='pointer-para'>
                      Cleaning up the content on Stream (Classic), deleting
                      unused videos
                    </p>
                  </div>
                </div>
                <div className='pointer'>
                  <div className='pointer-number'>3</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>
                      Configure Stream (on SharePoint)
                    </h4>
                    <p className='pointer-para'>
                      Setting up the new Stream environment, configuring
                      permissions and settings to ensure a smooth transition
                    </p>
                  </div>
                </div>
                <div className='pointer'>
                  <div className='pointer-number'>4</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>Migrate the content</h4>
                    <p className='pointer-para'>
                      Transferring the videos from Stream (Classic) to Stream
                      (on SharePoint) using the migration tool
                    </p>
                  </div>
                </div>
                <div className='pointer'>
                  <div className='pointer-number'>5</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>
                      Test the migrated content
                    </h4>
                    <p className='pointer-para'>
                      Testing the content to ensure that it's accessible and
                      working as expected
                    </p>
                  </div>
                </div>
                <div className='pointer'>
                  <div className='pointer-number'>6</div>
                  <div className='pointer-info'>
                    <h4 className='pointer-header'>Train & inform users</h4>
                    <p className='pointer-para'>
                      Finally, admins need to guide their users on how to use
                      Stream (on SharePoint) and ensure that they're familiar
                      with any new features or changes
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className='core-flow'>
            <h3>Core Flow</h3>
            <img
              src={streamadmincenter}
              alt=''
              className='img-project core-flow-img'
            />
            <img src={spac2} alt='' className='img-project core-flow-img' />
            <p className='newmargin-temp'>
              Step 1: Navigate to the Stream migration tool through the Stream
              Admin Center or via Migration Manager on the SharePoint Admin
              Center.
            </p>
            <img src={scanningcontainersimg} alt='' className='img-project ' />
            <p className='newmargin-temp'>
              Step 2: The migration tool will automatically begin discovering
              all the containers in your organisation.
            </p>
            <div className='fre-scans-tab'>
              <div className='fre-scans-tab-grey'>
                <button className='collapse-btn ' onClick={collapsedFunc}>
                  <h4>
                    <div className='svg-indent'>
                      <svg
                        width='11'
                        height='9'
                        viewBox='0 0 11 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={`${
                          collapsed
                            ? 'fre-diamond pointercollapsed'
                            : 'fre-diamond pointeropen'
                        }`}
                      >
                        <path
                          d='M5.5 8.5L0.736861 0.249999L10.2631 0.25L5.5 8.5Z'
                          fill='black'
                        />
                      </svg>
                      FRE: Scans Tab
                    </div>
                  </h4>
                </button>

                <p
                  className={`${collapsed ? 'fre-scan-extra transitionP' : ''}`}
                >
                  A “First Run Experience” provides users with guidance to
                  navigate through the tool. The spotlights shown below are one
                  of the components used for onboarding.
                </p>
                <div
                  className={`${
                    collapsed ? 'fre-scan-extra video-grid' : 'video-grid'
                  }`}
                >
                  <video
                    controls
                    src={takethetourscans}
                    className={`${
                      collapsed ? 'fre-scan-extra iframe' : 'iframe'
                    }`}
                  ></video>
                </div>
              </div>
              <video
                controls
                src={scanningcontainers}
                className='iframe'
              ></video>

              <p>
                Step 3: Once discovery is complete you can begin scanning
                containers for videos, and add them to the migrations tab; to
                assign destination paths.
              </p>
            </div>
            <div className='fre-migrations-tab'>
              <div className='fre-scans-tab-grey'>
                <button className='collapse-btn' onClick={collapsedFuncM}>
                  <h4>
                    <div className='svg-indent'>
                      <svg
                        width='11'
                        height='9'
                        viewBox='0 0 11 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={`${
                          collapsedM
                            ? 'fre-diamond pointercollapsed'
                            : 'fre-diamond pointeropen'
                        }`}
                      >
                        <path
                          d='M5.5 8.5L0.736861 0.249999L10.2631 0.25L5.5 8.5Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                    FRE: Migrations tab
                  </h4>
                </button>
                <p
                  className={`${
                    collapsedM ? 'fre-scan-extra transitionP' : ''
                  }`}
                >
                  A “First Run Experience” provides users with guidance to
                  navigate through the tool. The spotlights shown below are one
                  of the components used for onboarding.
                </p>
                <div
                  className={`${
                    collapsedM
                      ? 'fre-scan-extra video-grid'
                      : 'video-grid fre-mi'
                  }`}
                >
                  <video
                    controls
                    src={tourmigrations}
                    className={`${
                      collapsedM ? 'fre-scan-extra iframe' : 'iframe'
                    }`}
                  ></video>
                </div>
              </div>
              <video
                controls
                src={migratingcontainers}
                className='iframe'
              ></video>

              <p>Step 4: Assigning destination paths and migrating videos</p>
            </div>
          </div>
          <div className='post-migration'>
            <h3>
              Post-migration steps: Transitioning to Stream (on SharePoint)
            </h3>
            <p>
              Change the Stream tile in the app launcher settings to point to
              “Stream (on SharePoint). This will update the on-click behaviour
              when users launch Stream from the left-nav on M365.
            </p>
            <img
              src={streamtilesettings}
              alt=''
              className='img-project post-migration-img'
            />
            <img src={m365} alt='' className='img-project post-migration-img' />
            <p>
              Restrict videos from being uploaded to Stream (Classic), so that a
              containers don’t need to be re-scanned for videos and migrated.
            </p>
            <img
              src={restrictvideouploadonstream}
              alt=''
              className='img-project post-migration-img'
            />
            <p>
              Inform your users about the migration to the new Stream when they
              go to Classic by enabling the message settings on the Stream admin
              center.
            </p>
            <img
              src={messageadminsettings}
              alt=''
              className='img-project  post-migration-img'
            />
            <img
              src={enduserimage}
              alt=''
              className='img-project  post-migration-img'
            />
            <img
              src={mobilemessage}
              alt=''
              className='img-project  post-migration-img'
            />
            <img
              src={mobileappswitcher}
              alt=''
              className='img-project  post-migration-img'
            />
          </div>

          <div className='north-star'>
            <div className='north-star-grid'>
              <div className=''>
                <button className='collapse-btn' onClick={collapsedNFunc}>
                  <h4>
                    <div className='svg-indent'>
                      <svg
                        width='11'
                        height='9'
                        viewBox='0 0 11 9'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className={`${
                          collapsedN
                            ? 'fre-diamond pointercollapsed'
                            : 'fre-diamond pointeropen'
                        }`}
                      >
                        <path
                          d='M5.5 8.5L0.736861 0.249999L10.2631 0.25L5.5 8.5Z'
                          fill='black'
                        />
                      </svg>
                    </div>
                    🌠 North Star
                  </h4>
                </button>
              </div>
              <video
                src={northstar}
                // muted
                // autoPlay
                controls
                className={`${collapsedN ? 'fre-scan-extra iframe' : 'iframe'}`}
              ></video>
            </div>
          </div>
          <div className='my-role'>
            <h3>My Role</h3>
            <p>
              My role was to design and lead the end-to-end experience for
              admins to successfully migrate their tenants data; by
              understanding their requirements, working closely with the triad
              to build a shared understanding, enrol relevant stakeholders and
              manage dependancies.
            </p>
            <p>
              Additionally, I worked closely with content writers to ensure that
              all the communication on the UI, along with user guidance and
              support documentation were handed over smoothly to the respective
              teams. It was important for me to connect with designers and
              triads working on other pieces of the experience to ensure that
              the experience was cohesive and intuitive for users to navigate.
            </p>
            <p>
              Along with this, I took on the responsibility of leading the
              end-user experience to ensure that members within the organisation
              were informed about the migration across all Stream touchpoints
              (Web, mobile and tablet apps). Since I had built a good context of
              the backend work, it seemed obvious for me to pick up and drive
              the front-end experience as well. View the full project
            </p>
            <p>
              To ensure that my opinions weren't biased I was sure to spar my
              designs with the larger forum at regular intervals (IDC design
              team a.k.a Studio +91, and with our global counterparts) as well
              as connect with our customers to hear their feedback and validate
              our solutions.
            </p>
          </div>
          <div className='challenges'>
            <h3>Challenges</h3>
            <ul>
              <li>Complexity of the project was overwhelming</li>
              <li>
                Working with a tight timelines and technical constraints limited
                creativity
              </li>
              <li>
                Prioritising execution since the project was already in progress
                and was handed over to me from another designer
              </li>
              <li>
                Building context while simultaneously delivering deliverables
              </li>
              <li>
                Enrolling stakeholders in my understanding that admins also
                deserved intuitive user experiences that simplified and enhanced
                their processes to complete tasks with efficiency and accuracy
              </li>
              <li>
                Working iteratively to deliver on timelines and not fixating on
                pixel perfection
              </li>
            </ul>
          </div>
          <div className='learning'>
            <h3>Learning</h3>
            <ul>
              <li>
                Building a rapport with my triad (PM’s, devs, engineers) and
                understanding their constraints, and point of view empowered all
                of us to find common ground, this took a while but once we were
                more empathetic towards each other and trusted each others areas
                of expertise working together was seamless, efficient and fun
              </li>
              <li>
                Learning to work with cross-functional teams and working with
                dependencies
              </li>
              <li>
                Finding the best way to work remotely with teams across
                geographies
              </li>
              <li>
                Making the right trade-offs at the right time, and sticking my
                ground with respect to important requirements as a the design
                lead
              </li>
            </ul>
          </div>
          <div className='team'>
            <h3>Team</h3>
            <h5>Trisha Mody (Lead Designer)</h5>
            <h5>Varun Taneja (Project Manager)</h5>
            <h5>Vaibhav Malik (Engineering Manager)</h5>
            <h5>Nikita (Developer)</h5>
          </div>

          {/* <Link to='/project'> */}
          <div className='next-project'>
            <div className='header'>
              <h2>Next Project</h2>
              <h2>Coming soon</h2>
            </div>
            <img src={image3} alt='' className='img-project' />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  )
}

export default SinglePage
