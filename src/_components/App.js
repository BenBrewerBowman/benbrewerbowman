import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { NavigationDesktop } from './';
import { NavigationMobile } from './';
import { TitlePage } from './';
import { SkillsPage } from './';
import { Footer } from './';
import { ContactPage } from './';
import { PhotosPage } from './';
import { AboutPage } from './';
import { SnowboardingSection } from './';
import { OutdoorStats } from './';
import { MottoBanner } from './';

const App = () => (
  <div>
    <Hidden smDown>
      <NavigationDesktop />
    </Hidden>
    <Hidden mdUp>
      <NavigationMobile />
    </Hidden>
    <TitlePage />
    <AboutPage id='about-page' />
    <SkillsPage id='skills-page' />
    <MottoBanner id='interests-page' />
    <OutdoorStats />
    <SnowboardingSection/>
    <PhotosPage id='photos-page' />
    <ContactPage id='contact-page' />
    <Footer />
  </div>
);

export { App };
