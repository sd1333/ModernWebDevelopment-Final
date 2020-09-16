import React, { Component } from 'react';

import WelcomeMessage from './WelcomeMessage';
import Cards from './Cards/Cards';
import Services from './ChurchServices/MainServices';
import DailyVerse from '../Headers/DailyVerse';

export default class MainBody extends Component {
  render() {
    return (
      <div>
        <DailyVerse />
        <WelcomeMessage />
        <Cards />
        <Services />
      </div>
    );
  }
}
