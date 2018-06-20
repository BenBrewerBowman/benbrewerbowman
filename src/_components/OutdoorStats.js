import React from 'react';
import Grid from '@material-ui/core/Grid';
import MountainBikingPng from '../_img/mountain-biking.png';
import SnowPng from '../_img/snow.png';
import MountainSvg from '../_img/mountain.svg';
import BackpackerPng from '../_img/backpacker.svg';
import { withStyles } from '@material-ui/core/styles';
import { StatsCounter } from './'


const styles = theme => ({

    container: {
        padding: '80px 60px',
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 24
    },
    grid: {
        marginTop: 30
    },
    img: {
        height: 75
    }
});


const OutdoorStats = (props) => {

    const { classes } = props;
    const start = 0;
    const duration = 1.5;
    const fastestSnowboardingValue = 57;
    const longestBackpackingValue = 27;
    const elevationMountainBikingValue = 5800;
    const distanceMountainBikingValue = 37;
    
    return (
        <div className={classes.container} >
            <p className={classes.header} > 
                Here are my some of my biggest outdoor accomplishments to date:
            </p>
            <div className={classes.grid} >
                <Grid container spacing={24} alignItems='stretch' justify='flex-end'  > 
                    <Grid item xs={12} sm={6} md={3} >
                        <StatsCounter
                            title='Most elevation drop mountain biking:'
                            start={start}
                            end={elevationMountainBikingValue}
                            duration={duration}
                            units='Feet'
                            img={<img className={classes.img} src={MountainSvg} alt="Mountains Icon" />}
                        />
                    </Grid> 
                    <Grid item xs={12} sm={6} md={3} >
                        <StatsCounter
                            title='Longest mountain bike ride:'
                            start={start}
                            end={distanceMountainBikingValue}
                            duration={duration}
                            units='Miles'
                            img={<img className={classes.img} src={MountainBikingPng} alt="Mountain Biker Icon" />}
                        />
                    </Grid> 
                    <Grid item xs={12} sm={6} md={3} >
                        <StatsCounter
                            title='Fastest snowboarding speed:'
                            start={start}
                            end={fastestSnowboardingValue}
                            duration={duration}
                            units='Mph'
                            img={<img className={classes.img} src={SnowPng} alt="Snowflake Icon" />}
                        />
                    </Grid> 
                    <Grid item xs={12} sm={6} md={3} >
                        <StatsCounter
                            title='Longest backpacking trip:'
                            start={start}
                            end={longestBackpackingValue}
                            duration={duration}
                            units='Days'
                            img={<img className={classes.img} src={BackpackerPng} alt="Backpacker Icon" />}
                        />
                    </Grid> 
                </Grid>
            </div>
        </div>
    );
}

const OutdoorStatsWithStyles = withStyles(styles) (OutdoorStats);
export { OutdoorStatsWithStyles as OutdoorStats };