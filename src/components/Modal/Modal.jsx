import React from 'react'
import './Modal.css'


// This Modal 

export default function Modal({active, setActive, children}) {

  return (
    <div className={active === true ? 'modal active' : 'modal'} onClick={()=> setActive(false)}>
        <div className='modal__content' onClick={(e)=> e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

