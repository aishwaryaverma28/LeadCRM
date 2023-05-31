import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import styles from './Styles/LoginFooter.module.css';
import award1 from '../Components/assets/award-image1.png'
import award2 from '../Components/assets/award-image2.png'
import award3 from '../Components/assets/award-image3.png'
import award4 from '../Components/assets/award-image4.png'
import award5 from '../Components/assets/award-image5.png'
import award6 from '../Components/assets/award-image6.png'
import award7 from '../Components/assets/award-image7.png'

const LoginFooter = () => {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <footer className={styles.loginFooter}>
        <section className={styles.loginFooterSec1}>
            <h2>Contact</h2>
            <h4>Philadelphia, Pennsylvania, 19107, United States</h4>
            <h2>Follow Us On</h2>
            <div className={styles.loginFooterIcons}>
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
            <div>
                <ul className={styles.loginFooterNav}>
                    <li className={styles.loginFootHome}>Home</li><hr/>
                    <li className={styles.loginFooteritems}>About</li><hr/>
                    <li className={styles.loginFooteritems}>Pricing</li><hr/>
                    <li className={styles.loginFooteritems}>Contact</li>
                </ul>
            </div>
            <div className={styles.loginFootAwards}>
                <div className={styles.awardsContainer} data-aos="flip-left"><img src={award1}/></div>
                <div className={styles.awardsContainer} data-aos="flip-left"><img src={award2}/></div>
                <div className={styles.awardsContainer} data-aos="flip-down"><img src={award3}/></div>
                <div className={styles.awardsContainer} data-aos="flip-up"><img src={award4}/></div>
                <div className={styles.awardsContainer} data-aos="flip-down"><img src={award5}/></div>
                <div className={styles.awardsContainer} data-aos="flip-right"><img src={award6}/></div>
                <div className={styles.awardsContainer} data-aos="flip-right"><img src={award7}/></div>
            </div>
        </section>
        <section className={styles.loginFooterSec2}>
            <h3>Copyright © 2023 <span className={styles.expertNum}> Lead CRM</span>. All Rights Reserved</h3>
            <h4>Lead CRM® and Ripple® are registered trademarks of Access UK Limited</h4>
        </section>
        
    </footer>
  )
}



export default LoginFooter