import React from 'react';
import Grid from 'material-ui/Grid';
import ProfilePic from './about-img.png';


const styles = {

    container: {
        padding: '50px 50px',
        
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 42
    },

    content: {
        fontSize: 18,
        textAlign: 'justify',
        textJustify: 'inter-word'
    },

    centerChildren: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },

    skillItem: {
        maxHeight: 200
    },
};


const AboutPage = (props) => (

    <div id={props.id} > 
        <div style={styles.container} >
            <Grid container spacing={24} direction='row-reverse' alignItems='center' justify='center' > 
                <Grid item xs={12} md={6} style={styles.centerChildren} >
                    <img src={ProfilePic} style={{ width: 300, height: 300, paddingBottom: 12}} />
                </Grid>           
                <Grid item xs={12} md={6} style={styles.centerChildren} >
                    <div>
                    <h1 style={styles.header}> Hey! I'm Ben </h1>
                        <h3 style={styles.content}>  
                            I am a software developer from Asheville, NC with a passion for working on new and exciting projects.
                            I graduated from University of North Carolina at Asheville, Summa Cum Laude in Mechatronics Engineering, and shortly thereafter relocated to Salt Lake City, UT.
                            I am a fervent snowboarder, mountain biker, and backpacker, and enjoy just about anything outdoors.
                            
                            Environmental sustainability and conservation are two important issues to me. Anything that helps us conserve and reduce our ecological footprint has both my interest and support.
                            We only have one earth, let's take care of it!
                        </h3>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div style={{marginTop: -50, height: 500, clipPath: 'polygon(0 20%, 100% 0, 100% 80%, 85% 50%, 60% 100%, 40% 60%, 25% 90%, 20% 80%, 15% 90%, 0 60%)', backgroundColor: '#5DDFED', background: 'linear-gradient(to top, #5DDFED 20%, Whitesmoke)', ...styles.container}} >
            <h2 style={{marginTop: 100, textAlign: 'center'}}>  
                You can catch me shredding some fresh powder in the winter... <br/> or drinking a cold one in the mountains in the summer!
            </h2>
        </div>
    </div>
);

export { AboutPage };