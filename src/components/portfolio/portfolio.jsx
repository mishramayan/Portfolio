import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>ERP Application for Blood Bank Management System</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>E-Commerce Web Application </h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Github</a>
        </article>
      </div>
    </section>
  )
}


export default portfolio
