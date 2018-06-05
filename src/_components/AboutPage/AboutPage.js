import React from 'react';
import Grid from 'material-ui/Grid';
import ProfilePic from './about-img.png';
import { SnowboardingSection } from '../SnowboardingSection';
import { OutdoorStats } from '../OutdoorStats';


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
            <Grid style={{marginTop: 30}} container spacing={24} direction='row-reverse' alignItems='flex-start' justify='center'  > 
                <Grid item xs={12} md={6} style={{...styles.centerChildren, marginTop: 0}} justify='center' alignItems='flex-start' >
                    <img src={ProfilePic} style={{ width: 300, height: 300, paddingBottom: 12}} />
                    <button style={{marginTop: 30}}class="ui blue inverted button">View Resume</button>
                </Grid>           
                <Grid item xs={12} md={6} style={styles.centerChildren} >
                    <div style={styles.centerChildren} >
                        {/* <h1 style={styles.header}> Hey! I'm Ben </h1> */}
                        <p style={styles.content}>  
                            I am a full-stack software developer with a passion for working on new and exciting projects.
                            I graduated with a B.S. in Mechatronics Engineering (Summa Cum Laude) from UNC Asheville, and live in Salt Lake City, UT.
                            I have experience developing for both startups and corporations, as well as some side projects of my own.
                            If it's innovative, novel, or challenging, it already has my attention. 
                            <br/>
                            <br/>
                            My favorite project to date involved developing adaptive recreation software to assist those with physical disabilities defy their limitations. 
                            My team and I developed drive-by-wire technology to control a "mountain trike" to allow the rider to independently
                            Imagi
                            <br/>
                            <br/>

                            Environmental sustainability and conservation are two important issues to me. 
                            Anything that helps us conserve and reduce our ecological footprint has both my interest and support.
                            sWhether it's improving water
                            We only have one earth, let's take care of it!

                            Some of my interests include snowboarding, mountain biking, and backpacking.<br/>
                        </p>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
        <OutdoorStats />
        <SnowboardingSection/>
    </div>
);

export { AboutPage };