import React from 'react'
import './hero.css'
import Title from '../../commons/title/Title'

const Hero = () => {
  return (
    <div>
      <section className='hero'>
        <div className="container">
            <div className='row'>
              <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
            <p>Hello.This is an educational website</p>
            <div className="button">
                <button className='primary-btn'>
                 GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                 VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
            </div>
        </div>
      </section>
      <div className="marigin">
        
      </div>
    </div>
  )
}

export default Hero
