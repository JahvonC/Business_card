import React from 'react'
import '/Users/Jahvon/React Contact Card/contact-card/src/components/Card.css'
import '/Users/Jahvon/React Contact Card/contact-card/src/components/fliptransition.css'
import { SocialIcon } from 'react-social-icons';

function Card({onClick}) {


  return (
    <div className='card flex' onClick={onClick}>

        <div className="card-back">
            <ul>
              <li>Twitter <SocialIcon url='https://twitter.com/home'/></li>
              <li>Linked-In  <SocialIcon url='https://www.linkedin.com/in/jahvoncapel'/></li>
              <li>Instagram  <SocialIcon url='https://www.instagram.com/j.developer_/'/></li>
            </ul>  
        </div>
        <div className="card-front">
          
          <h1>Jahvon Capel</h1> 
          <p className="title" style={{color: 'grey'}}>Front End Developer</p>
        </div>
    </div>
  )
}

export default Card;