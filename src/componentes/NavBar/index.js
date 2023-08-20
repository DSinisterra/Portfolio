import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
    return (
      <nav className="w-full h-14 fixed z-50 flex justify-between items-center px-5">
        <h1>Denis</h1>
        <section className=''>
          <a href='https://github.com/DSinisterra/' target='_blank' rel="noopener noreferrer" className='' >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>

          <a href='https://www.linkedin.com/in/denis-sinisterra-9bb49b218/' target='_blank' rel="noopener noreferrer" className='' >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>

          <a href='https://twitter.com/dsinisterra_' target='_blank' rel="noopener noreferrer" className='' >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </section>
      </nav>
    )
  }