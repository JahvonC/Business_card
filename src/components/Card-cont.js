import React from 'react'
import '/Users/Jahvon/React Contact Card/contact-card/src/components/Cardcontainer.css'
import Card from '/Users/Jahvon/React Contact Card/contact-card/src/components/Card.js'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

function Cardcont() {
    const [showFront, setShowFront] = useState(true)



  return (
    <div className='card-container'>
        <CSSTransition 
            in={showFront} 
            timeout={300} 
            classNames='flip'>

            <Card onClick ={() => {
              setShowFront((v) => !v);
              }}/>

        </CSSTransition>
        
    </div>
  )
}

export default Cardcont;