import React from 'react';
import Grid from 'material-ui/Grid';
import ProfilePic from './about-img.png';
import { SnowboardingSection } from '../SnowboardingSection';


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


const AboutPage = (props) => (

    <div id={props.id} > 
        <div style={styles.container} >
            <h1 style={styles.header}> Hey I'm Ben! </h1>
            <Grid container spacing={24} direction='row-reverse' alignItems='flex-start' justify='center'  > 
                <Grid item xs={12} md={6} style={{...styles.centerChildren, marginTop: 0}} justify='center' alignItems='flex-start' >
                    <img src={ProfilePic} style={{ width: 300, height: 300, paddingBottom: 12}} />
                    <button style={{marginTop: 30}}class="ui blue inverted button">View Resume</button>
                </Grid>           
                <Grid item xs={12} md={6} style={styles.centerChildren} >
                    <div style={styles.centerChildren} >
                        {/* <h1 style={styles.header}> Hey! I'm Ben </h1> */}
                        <p style={styles.content}>  
                            I am a full-stack software developer with a passion for working on new and exciting projects.
                            I have a B.S. in Mechatronics Engineering (Summa Cum Laude) from UNC Asheville, and currently live in Salt Lake City, UT.
                            My favorite project to date is working with a startup tech company to develop a drive-by-wire control system for individuals with physical disabilities.
                            It was both an innovative and meaningful project that resonated with me until ultimately inspiring me to make the leap into the world of software.
                            <br/>
                            <br/>
                            Some of my interests include snowboarding, mountain biking, and backpacking.
                            Here are my some of my biggest outdoor accomplishments to date:
                            <br/>
                            Fastest speed on a snowboard: 57 mph
                            Longest backpacking trip: 27 days across iceland
                            Largest elevation drop mountain biking: 5800 feet
                            Longest distance mountain biking: 37 miles
                            <br/>
                            <br/>
                            Environmental sustainability and conservation are two important issues to me. 
                            Anything that helps us conserve and reduce our ecological footprint has both my interest and support.
                            sWhether it's improving water
                            We only have one earth, let's take care of it!
                        </p>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
        <SnowboardingSection/>
    </div>
);

export { AboutPage };