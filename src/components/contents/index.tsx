import React from 'react';
import {View} from 'react-native';
import {StartupTime} from 'react-native-startup-time';

export const Contents: React.VFC = () => {
  const ContentsOne = require('./contentsOne').ContentsOne;
  const ContentsTwo = require('./contentsTwo').ContentsTwo;
  const ContentsThree = require('./contentsThree').ContentsThree;
  const ContentsFour = require('./contentsFour').ContentsFour;
  const ContentsFive = require('./contentsFive').ContentsFive;

  return (
    <View>
      <StartupTime />
      <ContentsOne />
      <ContentsTwo />
      <ContentsThree />
      <ContentsFour />
      <ContentsFive />
    </View>
  );
};
