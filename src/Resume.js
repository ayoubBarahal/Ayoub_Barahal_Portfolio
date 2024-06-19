import './resume.css' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import About  from './About' ;



function Resume(){

    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    };

    const handlegithub=()=>{
        window.open('https://github.com/ayoubBarahal', '_blank');

       // window.location.href = 'https://github.com/ayoubBarahal'; 
    };

    const handlelinkdin=()=>{
        window.open('https://www.linkedin.com/in/ayoub-barahal-25436029a/', '_blank');

    }

    const handleGmail=()=>{
        window.open('https://mail.google.com/mail/u/0/#inbox/KtbxLzGPmlGDhJgvPJfLVjTkVqBpLRfnMg?compose=DmwnWtMjKbvbxQfQVRQTQCJRTXQfdTMhhxHSfkMKGpKDGdGnJRpTpRCJcFJPFVFwMbtnkdBhblwl','_blank');
    }

    const pdfurl='https://drive.google.com/file/d/1ofDgntbWoMaOkhkM4MZCdeJKgKQhwXou/view';

    const handleresume=()=>{
        window.open(pdfurl,'_blank');

    }



    return (
        <div className='Resume'>
            <div className='Resume-header'>
                
                <a className='App-a' onClick={handleHome}>Home</a>
                <a className='App-a'>About</a>
                <a className='App-a' onClick={handleresume}>Resume</a> 
            </div>
            <main>
            <div className='Resume-main'>
                <div className='sidebar'>
                    <div className='info'>
                        <h2>AYOUB BARAHAL 	</h2>
                        <h3 className='work'>Software Engineer Student &#x1F4BB;	</h3>
                        <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQqVBnjhmSgGHccdngTdFRmbtNbrxHJtvMQLnChVpfTHtcpvXlxZsBxPvBCsnLXfZWgHG'>ayoubbarahal2@gmail.com</a>
                        <h3>Hay Salam , AGADIR </h3>
                    </div>
                    <div className='apps'>
                        
                        <div className='apps-github' onClick={handlegithub} target='_blank' >
                        <FontAwesomeIcon icon={faGithub} size='2x' className='githubicon'/><p>Git Hub </p>
                        </div>
                        <div className='apps-github' onClick={handlelinkdin}>
                        <FontAwesomeIcon icon={faLinkedinIn} size='2x' className='githubicon'/><p>Linkedin </p>
                        </div>
                        <div className='apps-github' onClick={handleGmail}>
                        <FontAwesomeIcon icon={faEnvelopeOpen} size='2x' className='githubicon'/><p>Gmail </p>
                        </div>
                        <div className='apps-github' onClick={handleresume}>
                        <FontAwesomeIcon icon={faFile} size='2x' className='githubicon'/><p>Resume </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                <h1 className='profil'>Profile</h1>
                <p>first-year Siftware Engineering student at the National School of Applied Sciences (ENSA) in Agadir,
                        passionate about new technologies and the development of innovative solutions. With strong skills
                        in programming, database management, and software engineering, I am constantly seeking new opportunities
                        to apply my theoretical knowledge in practical projects. Motivated, curious, and problem-solving oriented,
                        I am committed to making a significant contribution to any technological project.</p>
                <div class="education-section">
                <h1 className='profil'>Education</h1>
                <div>
                    <h3 className='intitus'>GENIE INFORMATIQUE, ENSA AGADIR</h3>
                    <p class="date-location">09/2023 - present | AGADIR</p>
                    <p>Currently in the third year of the engineering cycle in Computer Engineering at the National School of Applied Sciences (ENSA) of Agadir, I am engaged in a rigorous program that combines theory and practice to develop advanced skills in programming, system design, and project management, computer networking, and operating systems.</p>
                </div>
                <div>
                    <h3 className='intitus'>CLASSE PREPARATOIRE, ENSA AGADIR</h3>
                    <p class="date-location">09/2021 - 05/2023 | AGADIR</p>
                    <p>During these two years of integrated preparatory classes, I acquired a solid foundation in mathematics, physics, chemistry, and computer science, laying the necessary groundwork to tackle the engineering cycle in Computer Engineering. This intensive training allowed me to develop analytical and problem-solving skills, essential for my engineering career. The practical projects and group work carried out during this period strengthened my ability to work in teams and manage complex technical projects.</p>
                </div>
                <div>
                    <h3 className='intitus'>BAC SCIENCE PHYSIQUE, AL MORABITINE</h3>
                    <p class="date-location">2021 | TINGHIR</p>
                    <p>I obtained my scientific baccalaureate with an option in physical sciences, a training that provided me with a solid foundation in mathematics, physics, and chemistry. My experience at Al Morabitine High School also allowed me to develop a work discipline and a strong taste for academic challenges, thus effectively preparing me for the rigor of studies in computer engineering.</p>
                </div>
            </div>
            <h1 className='profil'>Certificates</h1>
                <div>
                    <h3 className='intitus'>Python Certificate, Codecademy</h3>
                    
                    <p>I have successfully completed a comprehensive Python programming course on Codecademy, an online platform known for its interactive and engaging learning experience. This certification has equipped me with a strong understanding of Python fundamentals, including data structures, object-oriented programming, and web development basics. Through hands-on projects and real-world examples, I have developed practical skills in writing efficient and clean code, problem-solving, and implementing algorithms. This certification has significantly enhanced my proficiency in Python, preparing me to tackle complex programming challenges and contribute effectively to software development projects.</p>
                </div>
                <div>
                    <h3 className='intitus'>Operating System Certification, Codecademy
                    </h3>
                    <p> I successfully completed an Operating System Certification course on Codecademy. This comprehensive online program provided me with an in-depth understanding of operating system concepts, including process management, memory management, file systems, and security. The course involved practical exercises and projects that allowed me to apply theoretical knowledge in real-world scenarios, enhancing my skills in troubleshooting, system configuration, and performance optimization. This certification has significantly strengthened my ability to manage and optimize operating systems, which is crucial for my ongoing studies and future career in computer engineering</p>
                </div>
                <br></br>
                <br></br>
                <p>Thank you for your time</p>


                </div>
                
            </div>
            </main>

        </div>


    );
}

export default Resume ;