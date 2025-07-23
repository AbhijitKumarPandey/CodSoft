
import './Style.scss'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


const Hero = () => {
  return (
    <div className='hero flex flex-col justify-center items-center gap-5'>
      <div className="first flex flex-col justify-center items-center gap-5">
        <img src={`https://media.licdn.com/dms/image/v2/D5603AQE4kMvrsTob0g/profile-displayphoto-scale_200_200/B56ZgDFKRJHcAY-/0/1752398343682?e=1756339200&v=beta&t=WftNxwOrtqG6EEHvFMqvq704DWKXGYQDKR1uO0R-ukU`} alt=""  className=' h-[170px] w-[150px] object-cover'/>
        <div className="content">
          <h3>Java Backend Developer 👋</h3>
          <p>Hi i,m Abhijit Kumar . Aspiring Java Backend Developer📍</p>
          <div className="icons flex my-2 gap-2">
            <a href="https://github.com/AbhijitKumarPandey"><FaGithub size="1.5rem"/></a>
            <a href="https://www.linkedin.com/in/abhijit-kumar-pandey-31236633b/"><FaLinkedin size="1.5rem"/></a>
          </div>
        </div>
      </div>
      <div className="tech flex flex-col items-center gap-2">
        <h3>Tech stack ||</h3>
        <div className="skills flex gap-2 items-center">
          <FaHtml5  className='icon text-orange-600' title='HTML'/>
          <IoLogoCss3  className='icon text-blue-700' title='CSS'/>
          <IoLogoJavascript  className='icon text-yellow-500' title='JavaScript'/>
          <FaJava  className='icon text-blue-600' title='Java'/>
          <GrMysql  className='icon text-blue-500' title='Tailwind'/>
        </div>
      </div>
    </div>
  )
}

export default Hero