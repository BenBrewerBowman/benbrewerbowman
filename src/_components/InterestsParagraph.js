import React from 'react';
import SunsetMountainsJPG from '../_img/sunset-mountains.jpg';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    container: {
        width: '100%',
        minWidth: 900,
        backgroundImage: `url(${SunsetMountainsJPG})`,
        backgroundSize: '100% 100%',
        backgroundPosition: "left",
        color: 'white'  
    },

    centerContent: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        textAlign: 'center',
        margin: "0px",
        paddingTop: '30px',
        paddingBottom: '30px'
    },

    content: {
        fontSize: 16,
        maxWidth: 800,
        padding: '0px 20px',
        margin: 'auto'
    },
});


const InterestsParagraph = (props) => {

    const { classes } = props;
    return (
        <div className={classes.container} id={props.id} >
            <div className={classes.centerContent} >
                <h1 className={classes.header} > 
                    When I'm not developing, I'm outside on some adventure!
                </h1>
                <p className={classes.content} >
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
};

const InterestsParagraphWithStyles = withStyles(styles) (InterestsParagraph);
export { InterestsParagraphWithStyles as InterestsParagraph };