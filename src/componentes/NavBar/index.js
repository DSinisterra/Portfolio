import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function NavBar() {
    return (
      <nav className="bg-gray-800 py-4 px-6 flex justify-between items-center fixed top-0 w-full z-10">
        <h1 className='text-white text-2xl font-semibold px-2'>Denis</h1>
        <section className='px-2'>
          <a href='https://github.com/DSinisterra/' target='_blank' rel="noopener noreferrer" className='px-2 text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>

          <a href='https://www.linkedin.com/in/denis-sinisterra-9bb49b218/' target='_blank' rel="noopener noreferrer" className='px-2 text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>

          <a href='https://twitter.com/dsinisterra_' target='_blank' rel="noopener noreferrer" className='px-2 text-white hover:text-gray-400 transition duration-300' >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </section>
      </nav>
    )
  }