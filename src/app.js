import angular from 'angular';

import './config/app.templates';

// import bootstrap from 'bootstrap';
// import bootstrapSass from 'bootstrap-sass';
import components from './config/all.components';
import landingPage from './components/landing/landing-page.component';
import graphApp from './components/graphApp/graph-app.component';

// dependencies
const requires = [
  'templates'

];


var app = angular.module('xorTradeApp', requires);

app.component('landingPage',landingPage);
app.component('graphApp',graphApp);
// for (let component in components){
//     app.component(component,component);
// }

// app.config(appConfig);
