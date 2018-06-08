import React from 'react';
import Grid from '@material-ui/core/Grid';
import ProfilePic from '../_img/about-img.png';


const styles = {

    container: {
        padding: '30px 50px 50px 50px',
        // backgroundColor: '#5DDFED',
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 42
    },

    paragraphHeader: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
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
    },

    skillItem: {
        maxHeight: 200
    },
};




const AboutPage = (props) => (

    <div id={props.id} > 
        <div style={styles.container} >
            <h1 style={styles.header}> Hey I'm Ben! </h1>
            <Grid style={{marginTop: 30}} container spacing={24} direction='row-reverse' alignItems='center' justify='center'  > 
                <Grid item xs={12} md={6} style={{...styles.centerChildren, marginTop: 0}} justify='center' alignItems='center' >
                    <img src={ProfilePic} style={{ width: 300, height: 300, paddingBottom: 12}} />
                    <button style={{marginTop: 30}}class="ui blue inverted button">View Resume</button>
                </Grid>           
                <Grid item xs={12} md={6} style={styles.centerChildren} >
                    <div style={styles.centerChildren} >
                        {/* <h1 style={styles.header}> Hey! I'm Ben </h1> */}
                        <p style={styles.content}> 
                            <p style={styles.paragraphHeader}> 
                                About me
                            </p> 
                            I am a full-stack software developer with a passion for working on new and exciting projects.
                            I graduated with a B.S. in Mechatronics Engineering (Summa Cum Laude) from UNC Asheville, and live in Salt Lake City, UT.
                            I have experience developing for both startups and larger companies, as well as some side projects of my own.
                            If it ecourages innovation, novelty, and a challenge, it already has my attention!
                            <br/>
                            <br/>
                            <p style={styles.paragraphHeader}> 
                                Why I became a software developer
                            </p>
                            My favorite project to date involved developing adaptive recreation software to assist those with physical disabilities in pursuing outdoor recreation. 
                            My team and I developed drive-by-wire robotic technology to control a "mountain trike", allowing the rider to independently enjoy the outdoors.
                            The trike allowed the user to go places they've never gone before and increase their mobile independence.
                            Those once confined to urban pavement could now experience hiking or biking with their family for maybe the first time ever.
                            This was both an innovative and meaningful project which ultimately inspired me to make the transition into the exciting world of software development.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
);

export { AboutPage };