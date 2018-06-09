import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link, Events } from 'react-scroll';
import { Manager, Target, Popper } from 'react-popper';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import LogoImg from '../_img/logo.svg';


const styles = {
    navBar: {
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        height: 60, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        zIndex: 1000, 
        letterSpacing: 1.5,
        backgroundColor: '#1DE9B6'
    },
    navItem: {
        margin: 20,
        color: 'black', 
        '&:hover': { color: 'red' }
    },
    logoContainer: {
        marginLeft: 10,
        height: 45,
        flexGrow: 1
    },
    menuContainer: {
        marginRight: 5
    }
};

class NavigationMobile extends React.Component {

    state = {
        isMenuOpen: false,
    };

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    

    handleToggle = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    };
    
    handleClose = event => {
        if (this.target.contains(event.target)) {
            return;
        }
        this.setState({ isMenuOpen: false });
    };
    
    render() {
        const offsetScroll = -60;
        const { isMenuOpen } = this.state;

        return(
            <div style={styles.navBar}>
                <div style={styles.logoContainer}>
                    <img src={LogoImg} height={styles.logoContainer.height} />
                </div>
                <Manager>
                    <Target>
                        <div 
                            style={styles.menuContainer}
                            ref={node => {this.target = node;}} 
                        >
                            <IconButton
                                onClick={this.handleToggle}
                                aria-owns={isMenuOpen ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                            >
                                <MenuIcon style={{ color: 'black',fontSize: 30 }}/>
                            </IconButton>
                        </div>
                    </Target>
                    <Popper
                        placement="bottom-end"
                        eventsEnabled={isMenuOpen}
                    >
                        <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow in={isMenuOpen} id="menu-list-grow" style={{ transformOrigin: '0 0 0' }}>
                            <Paper>
                            <MenuList role="menu">
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                                        <h3 style={styles.navItem} onMouseOver={this.handleHover}>ABOUT ME</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="skills-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                                        <h3 style={styles.navItem} onMouseOver={this.handleHover}>SKILLS</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="interests-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                                        <h3 style={styles.navItem}>INTERESTS</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="photos-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                                        <h3 style={styles.navItem}>GALLERY</h3>
                                    </Link> 
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={offsetScroll} duration={800} >
                                        <h3 style={{...styles.navItem, marginRight: 50}}>CONTACT</h3>
                                    </Link>
                                </MenuItem>
                            </MenuList>
                            </Paper>
                        </Grow>
                        </ClickAwayListener>
                    </Popper>
                </Manager>
            </div>
        );
    }
}

export { NavigationMobile };
