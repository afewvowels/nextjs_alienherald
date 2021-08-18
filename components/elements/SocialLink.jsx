import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTshirt } from '@fortawesome/pro-solid-svg-icons'
import { faFacebookF, faGithub, faInstagram, faPatreon, faPaypal, faTwitch, faTwitter, faVimeo, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faToolbox } from '@fortawesome/free-solid-svg-icons'

import styles from 'styles/elements.module.css'



const SocialLink = ({icon, text}) => {
  return (<>
    <div>
      <FontAwesomeIcon icon={icon} />
      <p>{text}</p>
    </div>
  </>)
}

export default SocialLink