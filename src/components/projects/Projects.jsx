
import './Style.scss'
import classM from '../../assets/class.jpg'
import job from '../../assets/job-form.jpg'

const Projects = () => {
  return (
    <div className="projects bg-black text-white">
      <p className='title font-semibold text-blue-500'>Projects</p>
      <p className='title font-semibold'>Each project is a unique piece of development🧑‍💻</p>
      <section>
        <div className="project project1">
          <img src={classM} alt="" />
          <div className="content">
            <h3>Class Management System 👨‍💻</h3>
            <p>This project allows faculty to manage student attendance, assignments, and grades efficiently. Built using Java and MySQL, it supports CRUD operations and user authentication. </p>
            <div className="tech flex gap-5">
              <b>Java</b>
              <b>Mysql</b>
            </div>
          </div>
        </div>
          {/* 999999999999999999999999 */}
        <div className="project project2">
          <img src={job} alt="" /> 
          <div className="content">
            <h3>Responsive Job Application Form</h3>
            <p>This project is a fully responsive Job Application Form built using only HTML and CSS. It features a clean and user-friendly layout that allows applicants to input personal information, education, work experience, and upload resumes. The form design follows accessibility and UI best practices, using semantic HTML elements and modern CSS techniques like Flexbox and media queries. It demonstrates my ability to create structured, responsive, and professional web forms suitable for real-world applications.</p>
            <div className="tech flex gap-5">
              <b>HTML</b>
              <b>CSS</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects