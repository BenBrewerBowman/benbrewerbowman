import React from 'react';
import Particles from 'react-particles-js';
import SnowboarderSvg from '../_img/snowboarder.svg';


const styles = {

    container: {
        marginTop: -50, 
        height: 440
    },
    header: {
        marginTop: 110, 
        textAlign: 'center'
    },
    snowboarderContainer: {
        display: 'flex', 
        flexDirection: 'row-reverse', 
        marginRight: '15%' 
    },
    snowboarderImg: {
        marginTop: 100, 
        transform: 'rotate(-45deg)', 
        width: '50vw',
        maxWidth: 300
    }
};

const SnowboardingSection = (props) => (
    <div>
        <Particles 
            params={{
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                    "enable": true,
                    "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                    "width": 0,
                    "color": "#000000"
                    },
                    "polygon": {
                    "nb_sides": 5
                    },
                    "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": true,
                    "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                    }
                },
                "size": {
                    "value": 10,
                    "random": true,
                    "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                    }
                }
                },
                "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                    "enable": true,
                    "mode": "bubble"
                    },
                    "onclick": {
                    "enable": true,
                    "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 0.5
                    }
                    },
                    "bubble": {
                    "distance": 400,
                    "size": 4,
                    "duration": 0.3,
                    "opacity": 1,
                    "speed": 3
                    },
                    "repulse": {
                    "distance": 200,
                    "duration": 0.4
                    },
                    "push": {
                    "particles_nb": 4
                    },
                    "remove": {
                    "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
            }}
            style={{
            backgroundImage: "",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: '#5DDFED',
            // background: 'linear-gradient(to top, #5DDFED 65%, #5DDFED,)',
            width: '100%',
            clipPath: 'polygon(0 0, 100% 0, 100% 80%, 85% 50%, 60% 100%, 40% 60%, 25% 90%, 20% 80%, 15% 90%, 0 60%)',
            zIndex: -1,
            position: 'absolute', 
            marginTop: -100,
            // minWidth: 900
            }}
            height='500px'
            width='100%'
        />
        <div style={styles.container} >
            <h1 style={styles.header}>  
                You can catch me shredding some fresh powder in the winter... <br/> 
                or cracking a cold one in the mountains in the summer!
            </h1>
            <div style={styles.snowboarderContainer} >
                <img style={styles.snowboarderImg} src={SnowboarderSvg} alt="Snowboader Icon" />
            </div>
        </div>
    </div>
);

export { SnowboardingSection };