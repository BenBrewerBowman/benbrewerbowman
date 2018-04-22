import React from 'react';

import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';   
import { linkedin } from 'react-icons-kit/icomoon/linkedin'; 
import { mail4 } from 'react-icons-kit/icomoon/mail4';  

const Footer = () => (
    <div style={{backgroundColor: '#1DE9B6', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Icon style={{margin: 30}} size={40} icon={github} />
        <Icon style={{margin: 30}} size={40} icon={linkedin} />
        <Icon style={{margin: 30}} size={40} icon={mail4} />
    </div>
);

export { Footer };