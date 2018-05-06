import React from 'react';


const styles = {

    container: {
        padding: '50px 0px'
    },

    header: {
        textAlign: 'center',
        marginBottom: 30,
        fontSize: 36
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    field: {
        width: '90vw',
        maxWidth: 600
    },
};


const AboutPage = (props) => (

    <div style={{backgroundColor: 'whiteSmoke'}} id={props.id} > 
        <div style={styles.container} >
            <h1 style={styles.header}> Hey! I'm Ben </h1>
            <h3>
                I am a software developer from Asheville, NC with a passion for working on new and exciting projects.
                I graduated from University of North Carolina at Asheville, Summa Cum Laude, and shortly thereafter relocated to Salt Lake City, UT.
                I am a fervent snowboarder, mountain biker, and backpacker, and enjoy just about anything outdoors.
                You can catch me shredding some fresh powder in the winter, or drinking a cold one in the mountains in the summer.
                Environmental sustainability and conservation are two important issues to me. Anything that helps us conserve and reduce our ecological footprint has both my interest and support.
                We only have one earth, let's take care of it!
            </h3>
        </div>
    </div>
);

export { AboutPage };