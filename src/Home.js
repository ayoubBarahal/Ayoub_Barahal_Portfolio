import './Home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub,faLinkedin,faReact,faLaravel,faJava,faPython,faGitAlt,faAws } from "@fortawesome/free-brands-svg-icons";
import { faC } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Home() {

  const navigate=useNavigate();

  const handleresume=()=>{
    navigate('./Resume')

  }

  const handlegithub=()=>{
    window.open('https://github.com/ayoubBarahal', '_blank');
 
  }

  const handleLinkedin=()=>{
    window.open('https://www.linkedin.com/in/ayoub-barahal-25436029a/', '_blank');

  }

  const pdfurl='https://drive.google.com/file/d/1ofDgntbWoMaOkhkM4MZCdeJKgKQhwXou/view';


  const handleResume=()=>{
    window.open(pdfurl,'_blank');
  }

  return (
    <div className="App">
      <div className="App-header">
            <Link className='App-a'>Home</Link>
            <Link className='App-a' to='./About'>About</Link>
            <Link className='App-a' onClick={handleResume}>Resume</Link> 
      </div>
      <main className='App-main'>
        <div className='conatiner1'>
          <div className='box1'>
            <h2>Hey , I'am Ayoub &#x1F44B;	</h2>
            <h3>Software Engineer Student &#x1F4BB;	</h3>
          </div>
          <div className='box2' onClick={handleresume}>
          <FontAwesomeIcon icon={faFile} size='4x' className='githubicon'/>
          <h4 className='resume' >Resume</h4>
          </div>
          <div className='box3'>
          <FontAwesomeIcon icon={faGithub} size='4x' className='githubicon'/>
          <h4 className='github' onClick={handlegithub}>Git Hub</h4>
          </div>
        </div>
        <div className='container2'>
          <div className='box4' onClick={handleLinkedin}>
          <FontAwesomeIcon icon={faLinkedin}  size='4x' className='githubicon'/>
          <h4 className='linkdin'>Linkdin</h4>
          </div>
          <div className='test'>
          <div className='box6'>
            <h3 className='stuff'>Stuff  I am good at</h3>
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
        </div>
      </main>
      
    </div>
  );
}

export default Home;
