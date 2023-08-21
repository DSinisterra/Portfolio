import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
    return (
      <nav className="py-4 px-6 flex items-center space-x-4 justify-between items-center fixed top-0 w-full z-10">
        <h1 className='text-white text-2xl font-semibold'>Denis</h1>
        <section className='flex space-x-4'>
          <a href='https://github.com/DSinisterra/' target='_blank' rel="noopener noreferrer" className='text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>

          <a href='https://www.linkedin.com/in/denis-sinisterra-9bb49b218/' target='_blank' rel="noopener noreferrer" className='text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>

          <a href='https://twitter.com/dsinisterra_' target='_blank' rel="noopener noreferrer" className='text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </section>
      </nav>
    )
  }