import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.scss';


const Home = () => {
  return (
    <div className="home">
    <>
      <div className='headings'>
        <div>
          <h1>Hi,</h1>
          <h2>I'm Abdi,</h2>
          <h3>Web developer</h3>
          <h4>Front-end developer</h4>
        </div>

        <div className='contact-link'>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
      <div className="page-break"></div>
      <div className="page-content">
        <div className='content'>
          <p>
            As a software developer with a passion for creating innovative and user-friendly applications, I have experience in a variety of programming languages, including [List your programming languages].
          </p>
          <p>
            I have worked on a range of projects, including [list some examples of your projects]. In my free time, I enjoy staying up to date with the latest technology trends and learning new programming languages and frameworks.
          </p>
          <p>
            Please take a look at my <Link to="/projects">projects</Link> to see some of my work, or <Link to="/contact">contact me</Link> if you have any questions or would like to work together.
          </p>
        </div>
      </div>
    </>
    
    </div>
  );
  }

export default Home;
