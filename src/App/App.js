import React, { Component } from 'react';
import {NavigationDesktop} from '_components/NavigationDesktop';
import RockyMountainNatPark from './RockyMountainNatPark.jpg'
import Grey from 'material-ui/colors/grey';

class App extends Component {
  render() {
    return (
      <div >
        <NavigationDesktop />
        <div style={{width: '100%', height: '100vh', backgroundImage: `url(${RockyMountainNatPark})`, backgroundSize: 'cover', overflow: 'hidden'}}>
          <div style={{color: Grey[200], marginTop: '20vh', marginLeft: '20vw'}}> 
              <h1>Hi! I'm Ben</h1>
          </div>
        </div>
        {/* <img src={RockyMountainNatPark} alt="Rocky Mountain National Park" style={{width: '100%'}}>
          HEY
        </img> */}
      </div>
    );
  }
}

export default App;
