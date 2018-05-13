import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import CCTVPage from './components/CCTVCamera/CCTV_CameraPage';
import EPABXPage from './components/EPABX/EpbaxPage'; //eslint-disable-line import/no-named-as-default
import SecurityAlarmPage from './components/SecurityAlarm/Security-alarm-detector-systemPage'; 
import SurvellianceSystemPage from './components/SurvellianceSystem/Surveillance-systems-product-dealersPage';
import ContactPage from './components/Contacts/ContactsPage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="CctvCamera" component={CCTVPage}/>
    <Route path="EPABX" component={EPABXPage}/>
    <Route path="SecurityAlarm" component={SecurityAlarmPage}/>
    <Route path="SurvellianceSystem" component={SurvellianceSystemPage}/>
    <Route path="Contact" component={ContactPage}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
