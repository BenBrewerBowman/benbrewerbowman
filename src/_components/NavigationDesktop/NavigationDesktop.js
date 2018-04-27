import React from 'react';
import Grey from 'material-ui/colors/grey';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const styles = {
    navBar: {
        color: Grey[200], 
        position: 'fixed', 
        top: 0, 
        
        float: 'right', 
        width: '100%', 
        height: 100, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        zIndex: 1000, 
        letterSpacing: 1.5
    },

    navItem: {
        margin: 20,
        ':hover': { border: 'solid #0088FF 2px' }
    }
};

const NavigationDesktop = () => (
    <div style={styles.navBar}>
        <h3 style={styles.navItem}>ABOUT</h3>
        <h3 style={styles.navItem}>SKILLS</h3>
        <h3 style={styles.navItem}>PORTFOLIO</h3>
        <h3 style={{...styles.navItem, marginRight: 50}}>CONTACT</h3>
        <li><Link activeClass="active" to="contact-page" spy={true} smooth={true} duration={500} >Test 1</Link></li>
    </div>
);

export default NavigationDesktop;
