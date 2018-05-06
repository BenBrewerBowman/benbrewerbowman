import React from 'react';
import { NavigationDesktop } from '../NavigationDesktop';
import { TitlePage } from '../TitlePage';
import { SkillsPage } from '../SkillsPage';
import { Footer } from '../Footer';
import { ContactPage } from '../ContactPage';
import { PhotosPage } from '../PhotosPage/PhotosPage';
import { AboutPage } from '../AboutPage';

const App = () => (
  <div>
    <NavigationDesktop />
    <TitlePage />
    <AboutPage id='about-page' />
    <SkillsPage id='skills-page' />
    <PhotosPage id='photos-page' />
    <ContactPage id='contact-page' />
    <Footer />
  </div>
);

export default App;
