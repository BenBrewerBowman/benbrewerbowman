import React from 'react';
import Grey from 'material-ui/colors/grey';

const styles = {
    navBar: {
        color: Grey[200], 
        position: 'fixed', 
        top: 0, 
        marginRight: 20, 
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
        <h3 style={styles.navItem}>About</h3>
        <h3 style={styles.navItem}>Skills</h3>
        <h3 style={styles.navItem}>Portfolio</h3>
        <h3 style={styles.navItem}>Contact</h3>
    </div>
);

export default NavigationDesktop;
