import React, { useEffect, useRef, useState } from 'react'

const InfiniteCardSlider = () => {
  const carouselRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [startX, setStartX] = useState(0)
  const [startScrollLeft, setStartScrollLeft] = useState(0)
  let timeoutId = ''

  useEffect(() => {
    const carousel = carouselRef.current

    const firstCardWidth = carousel.querySelector('.card').offsetWidth
    const arrowBtns = document.querySelectorAll('.wrapper i')
    const carouselChildrens = [...carousel.children]

    // Get the number of cards that can fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth)

    // Insert copies of the last few cards to the beginning of the carousel for infinite scrolling
    carouselChildrens
      .slice(-cardPerView)
      .reverse()
      .forEach((card) => {
        carousel.insertAdjacentHTML('afterbegin', card.outerHTML)
      })

    // Insert copies of the first few cards to the end of the carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
      carousel.insertAdjacentHTML('beforeend', card.outerHTML)
    })

    // Scroll the carousel to an appropriate position to hide the first few duplicate cards on Firefox
    carousel.classList.add('no-transition')
    carousel.scrollLeft = carousel.offsetWidth
    carousel.classList.remove('no-transition')

    // Add event listeners for the arrow buttons to scroll the carousel left and right
    arrowBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        carousel.scrollLeft +=
          btn.id === 'left' ? -firstCardWidth : firstCardWidth
      })
    })

    const dragStart = (e) => {
      setIsDragging(true)
      carousel.classList.add('dragging')
      setStartX(e.pageX)
      setStartScrollLeft(carousel.scrollLeft)
    }

    const dragging = (e) => {
      if (!isDragging) return
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX)
    }

    const dragStop = () => {
      setIsDragging(false)
      carousel.classList.remove('dragging')
    }

    const infiniteScroll = () => {
      // If the carousel is at the beginning, scroll to the end
      if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth
        carousel.classList.remove('no-transition')
      }
      // If the carousel is at the end, scroll to the beginning
      else if (
        Math.ceil(carousel.scrollLeft) ===
        carousel.scrollWidth - carousel.offsetWidth
      ) {
        carousel.classList.add('no-transition')
        carousel.scrollLeft = carousel.offsetWidth
        carousel.classList.remove('no-transition')
      }

      // Clear existing timeout & start autoplay if the mouse is not hovering over the carousel
      clearTimeout(timeoutId)
      if (!carouselRef.current.matches(':hover')) autoPlay()
    }

    const autoPlay = () => {
      if (window.innerWidth < 800 || !isAutoPlay) return
      // Autoplay the carousel after every 2500 ms
      timeoutId = setTimeout(
        () => (carousel.scrollLeft += firstCardWidth),
        2500
      )
    }

    autoPlay()

    carousel.addEventListener('mousedown', dragStart)
    carousel.addEventListener('mousemove', dragging)
    document.addEventListener('mouseup', dragStop)
    carousel.addEventListener('scroll', infiniteScroll)

    return () => {
      clearTimeout(timeoutId)
      carousel.removeEventListener('mousedown', dragStart)
      carousel.removeEventListener('mousemove', dragging)
      document.removeEventListener('mouseup', dragStop)
      carousel.removeEventListener('scroll', infiniteScroll)
    }
  }, [isAutoPlay, isDragging])

  return (
    <div className='wrapper'>
      <i id='left' className='fa-solid fa-angle-left'></i>
      <ul ref={carouselRef} className='carousel'>
        {/* Copy and modify the rest of the HTML code here */}
      </ul>
      <i id='right' className='fa-solid fa-angle-right'></i>
    </div>
  )
}

export default InfiniteCardSlider
