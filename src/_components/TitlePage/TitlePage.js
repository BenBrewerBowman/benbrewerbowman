import React from 'react';
import Particles from 'react-particles-js';
import Grey from 'material-ui/colors/grey';
import { Button } from 'semantic-ui-react'


const TitlePage = () => (
    // <div style={{width: '100%', height: '100vh', backgroundImage: `url(${RockyMountainNatPark})`, backgroundSize: 'cover', overflow: 'hidden'}}>

    <div style={{ height: '110vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <Particles 
            params={{
              "particles": {
                "number": {
                  "value": 125,
                  "density": {
                    "enable": true,
                    "value_area": 1362.9002517356944
                  }
                },
                "color": {
                  "value": "#000000"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#050000"
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
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#000000",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
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
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
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
              // backgroundColor: '#1DE9B6',
              background: 'linear-gradient(#1DE9B6 40%, Whitesmoke )',
              zIndex: -1,
              position: 'absolute',
              top: 0,
              left: 0
            }}
            height='110vh'
            width='100%'
          />
          <div style={{color: 'black', zIndex: 100, textAlign: 'center', fontFamily: 'Montserrat, sans-serif'}}> 
            <h1 style={{fontSize: 58}}>
              Ben Brewer-Bowman
            </h1>
            <h1 style={{marginTop: 10, fontSize: 36}}>
              Software Developer 
            </h1>
            <Button style={{marginTop: 20}} color='#1DE9B6' href="https://github.com/BenBrewerBowman">
              View Github
            </Button>
          </div>
        </div>
);

export { TitlePage };