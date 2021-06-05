import React from 'react';
import {View} from 'react-native';
import {StartupTime} from 'react-native-startup-time';

export const Contents: React.VFC = () => {
  const ContentOne = require('./contentOne').ContentOne;
  const ContentTwo = require('./contentTwo').ContentTwo;
  const ContentThree = require('./contentThree').ContentThree;
  const ContentFour = require('./contentFour').ContentFour;
  const ContentFive = require('./contentFive').ContentFive;

  return (
    <View>
      <StartupTime />
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <ContentFour />
      <ContentFive />
    </View>
  );
};
