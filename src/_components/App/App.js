import React from 'react';
import { NavigationDesktop } from '../NavigationDesktop';
import { TitlePage } from '../TitlePage';
import { SkillsPage } from '../SkillsPage';
import { Footer } from '../Footer';
import { ContactPage } from '../ContactPage';
import { PhotosPage } from '../PhotosPage/PhotosPage';

const App = () => (
  <div>
    <NavigationDesktop />
    <TitlePage />
    <SkillsPage id='skills-page' />
    <PhotosPage id='photos-page' />
    <ContactPage id='contact-page' />
    <Footer />
  </div>
);

export default App;
