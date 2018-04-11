import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Grey from 'material-ui/colors/grey';

const NavigationDesktop = () => (
    <div style={{color: Grey[200], position: 'fixed', top: 0, width: '100%', textAlign: 'center', zIndex: 1000}}>
        <Grid container spacing={24}>
            <Grid item xs={5}><h2>Ben Brewer-Bowman</h2></Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={1}><h3>About</h3></Grid>
            <Grid item xs={1}><h3>Skills</h3></Grid>
            <Grid item xs={1}><h3>Portfolio</h3></Grid>
            <Grid item xs={1}><h3>Contact</h3></Grid>
            <Grid item xs={1}></Grid>
        </Grid>
    </div>
);

export default NavigationDesktop;
