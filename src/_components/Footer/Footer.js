import React from 'react';

import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/icomoon/github';   
import { linkedin } from 'react-icons-kit/icomoon/linkedin'; 
import { mail4 } from 'react-icons-kit/icomoon/mail4';  
import { IconButton} from 'material-ui';

const Footer = () => (
    <div style={{backgroundColor: '#1DE9B6', height: 100, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <IconButton style={{margin: "0px 30px", color: 'black'}} href="https://github.com/BenBrewerBowman" >
            <Icon size={40} icon={github} />
        </IconButton>
        <IconButton style={{margin: "0px 30px", color: 'black'}} href="https://www.linkedin.com/in/ben-brewer" >
            <Icon size={40} icon={linkedin} />
        </IconButton>
        <IconButton style={{margin: "0px 30px", color: 'black'}} href="mailto:benbrewerbowman.webapp@gmail.com" >
            <Icon size={40} icon={mail4} />
        </IconButton>
    </div>
);

export { Footer };