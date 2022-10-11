import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCogs, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () =>(
  <div className='nav-bar'>
    <Link className= 'logo' to = '/'>
    <img src={LogoS} alt="logo" />
    <img className='sub-logo' src={LogoSubtitle} alt="suryansh" />
</Link>
<nav>
<NavLink exact='true' activeclassname= 'active' to = '/'>
  <FontAwesomeIcon icon={faHome} color= '#4d4d4e'/>
</NavLink>
<NavLink exact='true' activeclassname= 'active' className="about-link" to = '/about'>
  <FontAwesomeIcon icon={faUser} color= '#4d4d4e'/>
</NavLink>

<NavLink exact='true' activeclassname= 'active' className="skill-link" to = '/skill'>
  <FontAwesomeIcon icon={faCogs} color= '#4d4d4e'/>
</NavLink>

<NavLink exact='true' activeclassname= 'active' className="mywork-link" to = '/mywork'>
  <FontAwesomeIcon icon={faCode} color= '#4d4d4e'/>
</NavLink>

<NavLink exact='true' activeclassname= 'active' className="contact-link" to = '/contact'>
  <FontAwesomeIcon icon={faEnvelope} color= '#4d4d4e'/>
</NavLink>

</nav>
 <ul>
  <li> 
  <a target="blank" rel= 'norefarrer' href="https://www.linkedin.com/in/suryansh-gupta-8b524214a/"> 
   <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
  </a>
 </li>

 <li> 
  <a target="blank" rel= 'norefarrer' href="https://github.com/suryansh95/"> 
   <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
  </a>
 </li>

 </ul>
  </div>
)
export default Sidebar