import React from 'react';
import { NavigationDesktop } from '../NavigationDesktop';
import { TitlePage } from '../TitlePage';
import { Footer } from '../Footer';
import { ContactPage } from '../ContactPage';

const App = () => (
  <div>
    <NavigationDesktop />
    <TitlePage />
    <ContactPage />
    <Footer />
  </div>
);

export default App;
