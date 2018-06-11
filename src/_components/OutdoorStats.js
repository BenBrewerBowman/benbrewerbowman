import React from 'react';
import Grid from '@material-ui/core/Grid';
import CountUp, { startAnimation } from 'react-countup';
import OnVisible from 'react-on-visible';
import MountainBikingPng from '../_img/mountain-biking.png';
import SnowPng from '../_img/snow.png';
import MountainSvg from '../_img/mountain.svg';
import BackpackerPng from '../_img/backpacker.svg';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    container: {
        padding: '80px 60px',
        // backgroundColor: '#5DDFED',
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
    },
    grid: {
        marginTop: 30
    },
    countUp: {
        fontSize: 36,
        marginBottom: 'auto'
    },
    content: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    flexGrow: {
        flexGrow: 1
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 30,
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30
    },
    skillItem: {
        maxHeight: 200
    },
    img: {
        height: 75
    }
});


class OutdoorStats extends React.Component  {

    state = {
        redraw: false
    };

    handleVisibility = () => {
        if (!this.state.redraw) {
            this.setState({
                redraw: true
            });
        }
    }

    render() {
        const { classes } = this.props;
        const { redraw } = this.state;
        const start = 0;
        const duration = 2.5;
        const fastestSnowboardingValue = 57;
        const longestBackpackingValue = 27;
        const elevationMountainBikingValue = 5800;
        const distanceMountainBikingValue = 37;
        
        return (
            <div className={classes.container} >
                <p className={classes.header} > 
                    Here are my some of my biggest outdoor accomplishments to date:
                </p>
                <OnVisible onChange={this.handleVisibility}>
                    <div className={classes.grid} >
                        <Grid container spacing={24} alignItems='stretch' justify='flex-end'  > 
                            <Grid item xs={12} sm={6} md={3} className={classes.flexColumn} justify='center' alignItems='center' >
                                <p className={`${classes.content} ${classes.flexGrow}`} >Most elevation drop mountain biking:</p>
                                <CountUp
                                    className={classes.countUp}
                                    start={start}
                                    end={elevationMountainBikingValue}
                                    separator=","
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimal=","
                                    decimals={0}
                                />
                                <p className={classes.content} >Feet</p>
                                <img className={classes.img} src={MountainSvg} />
                            </Grid> 
                            <Grid item xs={12} sm={6} md={3} className={classes.flexColumn} justify='center' alignItems='center' >
                                <p className={`${classes.content} ${classes.flexGrow}`}>Longest mountain bike ride:</p>
                                <CountUp
                                    className={classes.countUp}
                                    start={start}
                                    end={distanceMountainBikingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p className={classes.content} >Miles</p>
                                <img className={classes.img} src={MountainBikingPng} />
                            </Grid> 
                            <Grid item xs={12} sm={6} md={3} className={classes.flexColumn} direction='column' justify='center' alignItems='center' >
                                <p className={`${classes.content} ${classes.flexGrow}`} >Fastest snowboarding speed:</p>
                                <CountUp
                                    className={classes.countUp}
                                    start={start}
                                    end={fastestSnowboardingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p className={classes.content}>Mph</p>
                                <img className={classes.img} src={SnowPng}  />
                            </Grid>  
                            <Grid item xs={12} sm={6} md={3} className={classes.flexColumn}  justify='center' alignItems='center' >
                                <p className={`${classes.content} ${classes.flexGrow}`} >Longest backpacking trip:</p>
                                <CountUp
                                    className={classes.countUp}
                                    start={start}
                                    end={longestBackpackingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p className={classes.content} >Days</p>
                                <img className={classes.img} src={BackpackerPng} />
                            </Grid>  
                        </Grid>
                    </div>
                </OnVisible>
            </div>
        )
    }
}

const OutdoorStatsWithStyles = withStyles(styles) (OutdoorStats);
export { OutdoorStatsWithStyles as OutdoorStats };