import styles from '../styles/Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fafave } from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger, faWhatsapp, faFacebook, faTwitter, faPinterest, faInstagram } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <>
            <div className="divider"></div>
            <div className={styles.footer}>
                <div className={styles.siteMap}>
                    <h4>Site Map</h4>
                    <ul className={styles.navigation}>
                        <li><Link href={"/"}><a>Home</a></Link></li>
                        <br></br>
                        <li><Link href={"/about"}>About</Link></li>
                        <br></br>
                        <li><Link href={"/projects"}>Projects</Link></li>
                        <br></br>
                        <li><Link href={"/publications"}>Publications</Link></li>
                        <br></br>
                        <li><Link href={"/contact"}>Contact me</Link></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h4>Contact</h4>
                    <ul className={styles.contact}>
                        <li><h5>e-mail: </h5></li>
                        <li>info@shekine.com</li>
                        <br></br>
                        <li><h5>Phone: </h5></li>
                        <li>+30 698-6988-698</li>
                        <br></br>
                        <li><h5>Message me: </h5></li>
                        <li><FontAwesomeIcon icon={faFacebookMessenger} /> Messenger </li>
                        <li><FontAwesomeIcon icon={faWhatsapp} /> Whats up</li>
                    </ul>
                </div>

                <div className={styles.social}>
                    <h4>Social</h4>
                    <ul className={styles.faIcons}>
                        <Link href=''><a><FontAwesomeIcon icon={faFacebookMessenger} style={{ fontSize: 20 }} /></a></Link>
                        <Link href=''><a><FontAwesomeIcon icon={faFacebook} style={{ fontSize: 20 }} /></a></Link>
                        <Link href=''><a><FontAwesomeIcon icon={faInstagram} style={{ fontSize: 20 }} /></a></Link>
                        <br></br>
                        <br></br>
                        <Link href=''><a><FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20 }} /></a></Link>
                        <Link href=''><a><FontAwesomeIcon icon={faPinterest} style={{ fontSize: 20 }} /></a></Link>
                        <Link href=''><a><FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: 20 }} /></a></Link>
                    </ul>
                </div>

            </div>

            <div className="owner">
                Spatharas St. 2022 | All rights reserved &copy;
            </div>
        </>
    );
}

export default Footer;