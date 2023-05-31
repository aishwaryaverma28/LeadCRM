import React,{useState} from "react";
import styles from './Styles/LoginHeader.module.css'
import { Link } from "react-router-dom";

function LoginHeader (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
      console.log(isMenuOpen);
    };

    return(
        <>
        <header>

            {/*====================================top customer Care part */}
            <div className={styles.customerCare}>
                <a href="#" className={styles.support}>
                    <i className="fa-solid fa-headset"></i>
                    <h4 className={styles.supportHeading}>SUPPORT</h4>
                </a>
                <Link to="/dashboard" className={styles.support}>
                <i className="fa-solid fa-user"></i>
                    <h4 className={styles.supportHeading}>LOGIN</h4>
                </Link>
                <a href="#" className={styles.socialMedia}>
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className={styles.socialMedia}>
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className={styles.socialMedia}>
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
{/*==================================================== fixed navigation bar */}
            <nav className={styles.loginNavBar}>
                <img src="https://www.leadplaner.com/dashboard/login/images/logo.svg" alt="logo" className={styles.logoImg}/>
                <div className={styles.navOptions}>
                    <a href="#" className={styles.Home}>Home</a>
                    <a href="#" className={styles.navBlack}>About</a>
                    <a href="#" className={styles.navBlack}>Pricing</a>
                    <a href="#" className={styles.navBlack}>Contact</a>
                    <button className={styles.Demobtn}><span className={styles.arrowIcon}><i className="fa-solid fa-arrow-right"></i></span><span className={styles.demoText}> 4 Min Demo</span></button>
                    <button className={styles.freeTrailBtn}><span className={styles.arrowIcon2}><i className="fa-solid fa-arrow-right"></i></span><span className={styles.demoText}> Start Your Free Trail</span></button>
                </div>
            
                <div className={styles.NavhamburgerMenu}>
                    <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <a href="#">
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
            <div className={styles.LoginmenuContent}>
                <div className={styles.LoginnavOptions}>
                    <a href="#" className={styles.Home}>Home</a>
                    <a href="#" className={styles.navBlack}>About</a>
                    <a href="#" className={styles.navBlack}>Pricing</a>
                    <a href="#" className={styles.navBlack}>Contact</a>
                    <button className={styles.Demobtn}><span className={styles.arrowIcon}><i className="fa-solid fa-arrow-right"></i></span><span className={styles.demoText}> 4 Min Demo</span></button>
                    <button className={styles.freeTrailBtn}><span className={styles.arrowIcon2}><i className="fa-solid fa-arrow-right"></i></span><span className={styles.demoText}> Start Your Free Trail</span></button>
                </div>
            </div>
                )}

        </header>
        </>
    )
}
export default LoginHeader;