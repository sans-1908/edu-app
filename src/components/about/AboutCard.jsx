import React from 'react'
import Title from '../commons/title/Title'
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import './about.css'

const AboutCard=() => {
  return (
    <div> 
     <section className='aboutHome'>
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/wall.jpg" alt=''/>
            </div>
            <div className="right row">
                <Title subtitle='LEARN ANYTHING' title="Benefits About Online Learning Expertise" />
                <div className="items">
                  {homeAbout.map((val)=>{
                    return (
                  <div className="item flexSB">
                    <div className='img'>
                       <img src={val.cover} alt='' />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <h2>{val.desc}</h2>
                    </div>
                  </div>
                  )})}
                </div>
            </div>
        </div>
     </section>
     <AWrapper />
    </div>
  )
}

export default AboutCard
