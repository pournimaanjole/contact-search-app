import React from 'react';
import './Contactcard.css';

const Contactcard = ({name,phone}) => {
  return (
    <div>


      <div className='contact-detail'>

      <span className='name'>{name}</span>
      <span className='phone'>+{phone}</span>

      </div>



    </div>
  )
}

export default Contactcard
