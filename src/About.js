import './About.css' ;
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact,faLaravel,faJava,faPython,faGitAlt,faAws } from "@fortawesome/free-brands-svg-icons";
import { faC } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import Home from './Home';



function About(){



  const pdfurl='https://drive.google.com/file/d/1ofDgntbWoMaOkhkM4MZCdeJKgKQhwXou/view';


  const handleResume=()=>{
    window.open(pdfurl,'_blank');
  }



  


    return(
    <div className="About">
      <header>
      <div className="App-header">
            <Link className='App-a' to="/">Home</Link>
            <Link className='App-a' >About</Link>
            <Link className='App-a' onClick={handleResume}>Resume</Link> 
      </div>
      </header>
      <main>
      <div className='AboutMain'>
      <h1>About Me</h1>
      <p>Hey I am Ayoub Barahal; A  Software Engineer Student . &#x1F4BB; &#x1F680;</p>
      <p>Since I was a kid, I have been fascinated by computers and enjoyed the process of creating things. &#x1F528; &#x1F4A1;</p>
      <p>As a result, I pursued a career in Software Engineering, which combines my interests in technology and </p>
      <p>creation. &#x1F64C;</p>
      <p>Here are some of the things I am good at &#x1F4AA;</p>
      <div className='box5'>
            <div className='icons'>
            <FontAwesomeIcon icon={faReact} style={{color: "#74C0FC",}} size='3x' className='icon'/>
            <FontAwesomeIcon icon={faLaravel} style={{color: "#ef4636",}} size='3x'   className='icon' />
            <FontAwesomeIcon icon={faJava} size="3x" style={{color: "#f45000",}}  className='icon' />
            <FontAwesomeIcon icon={faPython} style={{color: "#fff133",}} size='3x'  className='icon' />
            <FontAwesomeIcon icon={faC} size='3x'  className='icon' />
            <FontAwesomeIcon icon={faGitAlt} style={{color: "#e24329",}} size='3x'  className='icon' />
            <FontAwesomeIcon icon={faAws} style={{color: "#ff9900",}} size='3x'  className='icon' />
            </div>
          </div>
        </div>
      </main>
    </div>

    );

}

export default About;