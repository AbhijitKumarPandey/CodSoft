import React from 'react'
import './Style.scss'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7234.373524746348!2d84.01825787740104!3d24.959759663586848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1712196019295!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <form action="https://formspree.io/f/xleqvebl" method='post' >
        <input type="text" placeholder='username' required name='username'/>
        <input type="email" placeholder='Email' required name='email'/>
        <textarea cols='33' rows='4' placeholder='Message' required name='message'></textarea>
        <button className='bg-violet-600 px-3 py-1 rounded-md font-semibold text-white cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Contact