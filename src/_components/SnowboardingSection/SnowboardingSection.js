import React from 'react';
import Particles from 'react-particles-js';


const styles = {

    container: {
        padding: '30px 50px',
        // backgroundColor: '#5DDFED',
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 42
    },

    content: {
        fontSize: 16,
        // textAlign: 'justify',
        textJustify: 'inter-word'
    },

    centerChildren: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: 30
    },

    skillItem: {
        maxHeight: 200
    },
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
            }}
            height='500px'
            width='100%'
        />
        <div style={{marginTop: -50, height: 440}} >
            <h1 style={{marginTop: 110, textAlign: 'center'}}>  
                You can catch me shredding some fresh powder in the winter... <br/> 
                or cracking a cold one in the mountains in the summer!
            </h1>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', marginRight: '15%' }} >
                <svg style={{marginTop: 100, transform: 'rotate(-45deg)'}} width="300" enable-background="new 0 0 389.722 229.551" viewBox="0 0 389.722 229.551" xmlns="http://www.w3.org/2000/svg">
                    <path d="m389.59,79.323c-.917-8.269-5.055-12.404-5.055-12.404s1.839-5.516-4.594-10.105-28.025-5.05-28.025-5.05l-10.568-10.57s1.376-4.594 0-5.053c-1.373-.457-3.214-.457-3.214-.457l-9.646-6.899-5.973,1.382s-5.052-4.594-11.945-7.35-11.946-2.297-11.946-2.297-8.269-5.511-15.162-7.352-16.079-2.756-16.079-2.756-3.677-6.433-10.565-9.188c-6.89-2.753-16.538,0-16.538,0l-15.16,1.38s-7.809,4.129-7.809,6.889v6.889l7.348-.46s1.378,4.138 3.675,4.138c2.295,0 9.192,1.375 9.192,1.375s4.132,7.809 5.97,7.809 17.916.923 17.916.923 6.433,2.753 7.809,2.753 2.303,8.273 6.435,11.485c4.133,3.22 11.026,5.053 11.026,5.053l.456,4.598-3.21.919-1.842,1.378s-2.298-1.838-4.593-1.838c-2.299,0-20.215,2.76-20.215,2.76l-2.753.915-15.164-4.594h-27.564s-11.487-3.677-14.245-3.677c-2.752,0-11.021,1.384-11.021,1.384s-11.031-2.299-12.407-2.299-9.19,2.76-9.19,2.76l-25.268,9.182s-5.972,0-7.809,1.378-12.865,7.811-14.241,11.029-8.729,17-8.729,17l-16.999.457s-2.755,4.592-.919,5.053c1.832.458 4.592,2.297 4.592,2.297l.458,2.756-6.887,2.301c-2.297,0-11.029-.46-11.029-.46l.46,5.976-.921,3.21-3.672.461s-35.835-17.001-45.939-25.729c-10.111-8.731-10.111-8.271-11.95-10.563-1.859-2.306-11.966-13.335-11.966-13.335h-4.138l.46,3.675s15.621,22.514 28.025,28.942c12.406,6.435 33.082,18.378 55.131,30.326 22.051,11.942 88.669,50.076 101.07,56.966 12.406,6.893 60.184,34.914 75.346,39.971 15.158,5.053 28.023,2.76 28.023,2.76l.921.913s0,2.297 8.724,2.758l8.731.458 .461-5.05 11.943-13.784 2.758-5.971s4.592-1.844 5.053-4.596c.461-2.758 1.382-10.566 1.382-10.566l3.673-2.757s4.134-.003 8.731-2.76c4.593-2.754 10.102-11.483 11.942-16.997s2.295-6.893 2.295-6.893l1.38-5.51s14.703-13.782 15.62-16.54c.92-2.755.92-10.107.92-10.107s1.38-5.972 2.293-11.485c.921-5.515 1.842-7.351 1.842-7.351s7.809-12.405 8.728-15.619c.93-3.219 5.07-5.977 4.15-14.248zm-178.71,54.667-2.297,7.354s-6.435,3.673-7.348,6.429c-.921,2.758-1.838,7.352-1.838,7.352l.456,11.943-6.891,2.299-2.758,6.433-77.639-41.349s9.19-10.107 10.568-10.567c1.374-.461 7.348-3.673 7.348-3.673l18.376-18.379 17,.461 6.433-7.356s4.59-.915 17,0c12.399.921 29.397,1.38 29.397,1.38s3.221,3.218 5.514,3.679c2.299.454 5.057,2.755 5.057,2.755l1.373,2.297s-1.834,2.297-2.295,6.889c-.456,4.596-1.378,6.435-1.378,6.435l-5.509,3.214-3.675,8.27-6.9,4.15zm113.01,7.81-4.594,6.894s-2.756,5.972-4.599,8.729c-1.836,2.752-4.592,12.404-4.592,12.404l-3.675,1.839-1.838,5.051s-9.646,15.622-11.025,17.459-2.755,23.427-2.755,23.427-6.435.921-10.107-.461-13.778-3.212-25.266-8.723-34.458-17.916-34.458-17.916l1.835-4.138 2.299-5.055 6.431-.461s2.756,2.297 4.133,2.297-.458-6.43-.458-6.43v-8.728s5.516-1.841 6.433-3.219 2.758-6.431 2.758-6.431l5.513-2.755 3.673-8.271s5.514-1.839 6.435-4.131c.915-2.3 2.297-4.597 2.297-4.597h1.835l1.84,3.214 6.892,3.217 5.974-.461-.921,4.594-1.837,3.217 1.378,1.382 2.756-.921c1.38-.461 1.376-7.811 1.376-7.811l2.758-1.382h23.431s7.35-5.97 8.731-6.427 7.35,0 7.35,0v4.6z" fill="#010101"/>
                </svg>
            </div>
        </div>
    </div>
);

export { SnowboardingSection };