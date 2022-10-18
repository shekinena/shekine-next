import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const Navbar = () => {
    const [navBarOpen, setnavBarOpen] = useState(false)
    const size = useWindowSize();

    function handleDropDown() {
        // console.log('asldjfh');
        navBarOpen = setnavBarOpen(!navBarOpen);

    }

    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                {/* Logo */}
                <div className={styles.branding}>
                    <Image src="/logo.png" alt="logo" width={150} height={38} />
                </div>
                {/* Burger Button */}
                {size.width <= 840 ? (
                    <div onClick={handleDropDown} className={styles.burgerIcon}>
                        <FontAwesomeIcon icon={faBars} style={{ fontSize: 30 }} />
                    </div>) : ''}
                {/* Nav links big screens */}
                {size.width >= 841 ? (<ul className={styles.navigation}>
                    <li><Link href={"/"}><a>Home</a></Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li><Link href={"/projects"}>Projects</Link></li>
                    <li><Link href={"/publications"}>Publications</Link></li>
                    <li><Link href={"/contact"}>Contact me</Link></li>
                </ul>) : ''}
                {/* Nav links mobile dropdown menu */}
                {size.width < 840 && navBarOpen ?
                    (

                        <div onClick={handleDropDown} className={styles.mobileNav}>
                            <div className={styles.branding}>
                                <Image src="/logo.png" alt="logo" width={150} height={38} />
                            </div>
                            <ul className={styles.dropdownNav}>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><Link href={"/about"}>About</Link></li>
                                <li><Link href={"/projects"}>Projects</Link></li>
                                <li><Link href={"/publications"}>Publications</Link></li>
                                <li><Link href={"/contact"}>Contact me</Link></li>
                            </ul>
                        </div>) : ''

                }

            </div>
        </header>


    );
}

export default Navbar;