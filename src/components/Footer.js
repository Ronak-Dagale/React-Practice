import './FooterStyles.css'

import React from 'react'
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style={{ color: 'fff', marginRight: '2rem' }} />
            <div>
              <p>New Ring Road,</p>
              <p>Baramati.</p>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: 'fff', marginRight: '2rem' }}
              />
              +91-9561307404
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: 'fff', marginRight: '2rem' }}
              />
              ronaksdagale16@gmail.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About Myself</h4>
          <p>
            This is me Ronak Dagale.Student At Pimpri Chichwad College of
            Engineering. I enjoy discussing new Project and Design Challenges
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: 'fff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: 'fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: 'fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
