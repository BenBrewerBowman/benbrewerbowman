import React from 'react';
import Grid from 'material-ui/Grid';
import CountUp, { startAnimation } from 'react-countup';
import OnVisible from 'react-on-visible';


const styles = {

    container: {
        padding: '0px 60px',
        // backgroundColor: '#5DDFED',
    },

    header: {
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20
    },

    countUp: {
        fontSize: 32,
        flexGrow: 1,
        justifySelf: 'self-end',
        marginBottom: 'auto'
    },

    content: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
         textAlign: 'center'
    },

    flexColumn: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'end',
        marginBottom: 30
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center',
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
        const duration = 3;
        const fastestSnowboardingValue = 57;
        const longestBackpackingValue = 27;
        const elevationMountainBikingValue = 5800;
        const distanceMountainBikingValue = 37;
        

        return (
            <div style={styles.container}>
                <p style={styles.header}> 
                    Some of my interests include snowboarding, mountain biking, and backpacking.<br/>
                    Here are my some of my biggest outdoor accomplishments to date:
                </p>
                <OnVisible onChange={this.handleVisibility}>
                    <div style={{marginTop: 30}} >
                        <Grid container spacing={24} alignItems='stretch' justify='flex-end'  > 
                            <Grid item xs={12} md={3} style={{marginTop: 0}} direction='column' justify='flex-end' alignItems='center' >
                                <p style={styles.content}>Fastest snowboarding speed:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={fastestSnowboardingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    // useEasing={true}
                                    // useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>MPH</p>
                            </Grid>  
                            <Grid item xs={12} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={styles.content}>Longest backpacking trip:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={longestBackpackingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={true}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>Days</p>
                            </Grid>  
                            <Grid item xs={12} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={styles.content}>Longest distance mountain biking:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={distanceMountainBikingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={true}
                                    useGrouping={true}
                                    decimals={0}
                                />
                                <p style={styles.content}>Miles</p>
                            </Grid> 
                            <Grid item xs={12} md={3} style={{...styles.flexColumn, marginTop: 0}} justify='center' alignItems='center' >
                                <p style={styles.content}>Biggest elevation drop mountain biking:</p>
                                <CountUp
                                    style={styles.countUp}
                                    start={start}
                                    end={elevationMountainBikingValue}
                                    redraw={redraw}
                                    duration={duration}
                                    useEasing={true}
                                    useGrouping={true}
                                    decimal=","
                                    decimals={0}
                                />
                                <p style={styles.content}>Feet</p>
                            </Grid> 
                        </Grid>
                    </div>
                </OnVisible>
            </div>
        )
    }
}

export { OutdoorStats };