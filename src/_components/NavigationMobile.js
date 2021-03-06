import React from 'react';
import { Link, Events } from 'react-scroll';
import { Manager, Target, Popper } from 'react-popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import classNames from 'classnames';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import LogoImg from '../_img/logo.svg';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

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
        '&:hover': { color: '#1DE9B6' }
    },
    logoContainer: {
        marginLeft: '5vw',
        flexGrow: 1
    },
    logo: {
        height: 45,
    },
    menuContainer: {
        marginRight: 5
    },
    menuIcon: {
        color: 'black',
        fontSize: 30 
    },
    popperClose: {
      pointerEvents: 'none'
    }
});

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
        const { classes } = this.props;
        const offsetScroll = -60;
        const { isMenuOpen } = this.state;

        return(
            <div className={classes.navBar} >
                <div className={classes.logoContainer} >
                    <img src={LogoImg} className={classes.logo} alt="Favicon Logo" />
                </div>
                <Manager>
                    <Target>
                        <div 
                            className={classes.menuContainer}
                            ref={node => {this.target = node;}} 
                        >
                            <IconButton
                                onClick={this.handleToggle}
                                aria-owns={isMenuOpen ? 'menu-list-grow' : null}
                                aria-haspopup="true"
                            >
                                <MenuIcon className={classes.menuIcon} />
                            </IconButton>
                        </div>
                    </Target>
                    <Popper
                        className={classNames({ [classes.popperClose]: !isMenuOpen })}
                        placement="bottom-end"
                        eventsEnabled={isMenuOpen}
                    >
                        <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow in={isMenuOpen} style={{ transformOrigin: '0 0 0', zIndex: -20 }}>
                            <Paper>
                            <MenuList role="menu">
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="about-page" spy={true} smooth={true} offset={offsetScroll} duration={0} >
                                        <h3 className={classes.navItem} onMouseOver={this.handleHover}>ABOUT ME</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="skills-page" spy={true} smooth={true} offset={offsetScroll} duration={0} >
                                        <h3 className={classes.navItem} onMouseOver={this.handleHover}>SKILLS</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="interests-page" spy={true} smooth={true} offset={offsetScroll} duration={0} >
                                        <h3 className={classes.navItem} >INTERESTS</h3>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="photos-page" spy={true} smooth={true} offset={offsetScroll} duration={0} >
                                        <h3 className={classes.navItem}>GALLERY</h3>
                                    </Link> 
                                </MenuItem>
                                <MenuItem onClick={this.handleClose}>
                                    <Link activeClass="active" to="contact-page" spy={true} smooth={true} offset={offsetScroll} duration={0} >
                                        <h3 className={classes.navItem} >CONTACT</h3>
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

const NavigationMobileWithStyles = withStyles(styles) (NavigationMobile);
export { NavigationMobileWithStyles as NavigationMobile };
