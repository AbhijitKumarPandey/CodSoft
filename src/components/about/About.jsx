import React from 'react'
import './Style.scss'
import aboutimg from '../../assets/about.jpg'

const About = () => {
  return (
    <div className="about bg-black text-white">
        <img src={aboutimg} alt="" />
        <div className="content">
          <span className='text-blue-700 font-semibold'>About</span>
          <h3>A dedicated Java Backend developer from sasarm,Bihar</h3>
          <p>As a Java Backend Developer fresher, I have a solid foundation in Java and SQL for building reliable and efficient backend systems. Alongside, I am proficient in HTML, CSS, and JavaScript, enabling me to develop clean and responsive user interfaces. My understanding of Data Structures and Algorithms enhances my problem-solving skills and code efficiency. I am eager to contribute to full-stack development projects and continuously grow as a well-rounded developer.</p>
        </div>
    </div>
  )
}

export default About