import React from 'react';
import CountUp from 'react-countup';
import OnVisible from 'react-on-visible';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

    countUp: {
        fontSize: 36,
        marginBottom: 'auto'
    },
    content: {
        marginTop: 10,
        fontSize: 20,
        // fontWeight: 'bold',
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
});


class StatsCounter extends React.Component  {

    state = {
        redraw: false
    };

    handleVisibility = (isVisible) => {
        const { redraw } = this.state;
        if (isVisible && !redraw) {
            this.setState({
                redraw: true
            });
        }
    }

    render() {
        const { classes, title, start, end, duration, units, img } = this.props;
        const { redraw } = this.state;
        
        return (
            <div className={classes.flexColumn} >
                <p className={`${classes.content} ${classes.flexGrow}`} >{title}</p>
                <OnVisible onChange={this.handleVisibility}>
                    <CountUp
                        className={classes.countUp}
                        start={start}
                        end={end}
                        separator=","
                        redraw={redraw}
                        duration={duration}
                        useEasing={false}
                        useGrouping={true}
                        decimal=","
                        decimals={0}
                    />
                </OnVisible>
                <p className={classes.content} >{units}</p>
                {img}
            </div>
        );
    }
}

const StatsCounterWithStyles = withStyles(styles) (StatsCounter);
export { StatsCounterWithStyles as StatsCounter };