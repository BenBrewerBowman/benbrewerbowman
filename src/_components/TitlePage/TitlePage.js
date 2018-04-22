import React from 'react';

import RockyMountainNatPark from './RockyMountainNatPark.jpg'
import Grey from 'material-ui/colors/grey';


const TitlePage = () => (
    <div style={{width: '100%', height: '100vh', backgroundImage: `url(${RockyMountainNatPark})`, backgroundSize: 'cover', overflow: 'hidden'}}>
      <div style={{color: Grey[200], marginTop: '17vh', marginLeft: '8vw', width: '50%', textAlign: 'center'}}> 
        <div style={{fontSize: 50}}>
          Ben Brewer-Bowman
        </div>
        <div style={{marginTop: 20, fontSize: 30, color: '#1DE9B6'}}>
          Software Developer 
        </div>
      </div>
    </div>
);

export { TitlePage };