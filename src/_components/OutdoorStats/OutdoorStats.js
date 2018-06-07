import React from 'react';
import Grid from 'material-ui/Grid';
import CountUp, { startAnimation } from 'react-countup';
import OnVisible from 'react-on-visible';
import MountainBikingPng from './mountain-biking.png';
import SnowPng from './snow.png';
import MountainSvg from './mountain.svg';
import BackpackerPng from './backpacker.svg';


const styles = {

    container: {
        padding: '80px 60px',
        // backgroundColor: '#5DDFED',
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
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
};

class OutdoorStats extends React.Component  {

    constructor (props) {
        super(props);

        this.state = {
            redraw: false
        }
    };

    handleVisibility = () => {
        if (!this.state.visible) {
            this.setState({
                redraw: true
            });
        }
    }

    render() {
        const {redraw} = this.state;

        const start = 0;
        const duration = 2.5;
        const fastestSnowboardingValue = 57;
        const longestBackpackingValue = 27;
        const elevationMountainBikingValue = 5800;
        const distanceMountainBikingValue = 37;

        const imgHeight = 75;
        

        return (
            <div style={styles.container}>
                <p style={styles.header}> 
                    Here are my some of my biggest outdoor accomplishments to date:
                </p>
                <OnVisible onChange={this.handleVisibility}>
                    <div style={{marginTop: 30}} >
                        <Grid container spacing={24} alignItems='stretch' justify='flex-end'  > 
                            <Grid item xs={12} sm={6} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={{...styles.content, flexGrow: 1}}>Biggest elevation drop mountain biking:</p>
                                <CountUp
                                    style={styles.countUp}
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
                                <p style={styles.content}>Feet</p>
                                <img src={MountainSvg} height={imgHeight} />
                            </Grid> 
                            <Grid item xs={12} sm={6} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={{...styles.content, flexGrow: 1}}>Longest distance mountain biking:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={distanceMountainBikingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>Miles</p>
                                <img src={MountainBikingPng} height={imgHeight} />
                            </Grid> 
                            <Grid item xs={12} sm={6} md={3} style={styles.flexColumn} direction='column' justify='center' alignItems='center' >
                                <p style={{...styles.content, flexGrow: 1}}>Fastest snowboarding speed:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={fastestSnowboardingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>Mph</p>
                                <img src={SnowPng} height={imgHeight} />
                            </Grid>  
                            <Grid item xs={12} sm={6} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={{...styles.content, flexGrow: 1}}>Longest backpacking trip:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={longestBackpackingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={false}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>Days</p>
                                <img src={BackpackerPng} height={imgHeight} />
                            </Grid>  
                        </Grid>
                    </div>
                </OnVisible>
            </div>
        )
    }
}

export { OutdoorStats };