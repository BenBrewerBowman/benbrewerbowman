import React from 'react';
import SunsetMountainsJPG from './sunset-mountains.jpg';


const styles = {

    container: {
        // textAlign: 'center',
        width: '100%',
        minWidth: 800,
        height: '100%',
        backgroundImage: `url(${SunsetMountainsJPG})`,
        backgroundSize: '100% 100%',
        backgroundPosition: "center",
        color: 'white',
        // position: 'relative',
        // left: '50%'
        // padding: '30px 50px',
        // backgroundColor: '#5DDFED',
    },

    centerContent: {
        // position: 'relative',
        // top: '50%',
        // transform: 'translateY(-50%)'
        textAlign: 'center',
        // margin: "30px 0px",
        width: '100vw',
        maxWidth: 800,
        margin: 'auto',
        paddingTop: '30px',
        paddingBottom: '30px'

        

        // margin: 'auto'
    },

    content: {
        fontSize: 16,
        // margin: '0px 20px',
        // textAlign: 'center',
        
        
        // textJustify: 'inter-word',
        // width: '100vw',
        

        margin: 'auto'
    },
};




const MottoBanner = (props) => (
    <div style={styles.container} >
        <div style={styles.centerContent}>
            <h1 style={styles.text}> 
                When I'm not developing, I'm outside on some adventure!
            </h1>
            <p style={styles.content}>
                In my free time I enjoy snowboarding, mountain biking, hiking, backpacking, and visiting beautiful places.
                Living in Salt Lake City has afforded me great access to outdoor recreation, and I am very grateful to live in such a beautiful city.
                Maintaining an active lifestyle has played a role in some of my views on important issues.
                Environmental conservation and sustainability have become two very important issues to me.
                I enjoy learning about green technology that reduces our carbon footprint or improves our air and water quality.
                I think we owe it to our communities as well as future generations to not leave our surroundings in a worse state than we found it.
                We only have one earth, so let's all do our part in taking care of it!
            </p>
        </div>
    </div>
);

export { MottoBanner };