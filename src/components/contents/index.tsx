import React from 'react';
import {View} from 'react-native';

export const Contents: React.VFC = () => {
  const ContentsOne = require('./contentsOne').ContentsOne;
  const ContentsTwo = require('./contentsTwo').ContentsTwo;
  const ContentsThree = require('./contentsThree').ContentsThree;
  const ContentsFour = require('./contentsFour').ContentsFour;
  const ContentsFive = require('./contentsFive').ContentsFive;

  return (
    <View>
      <ContentsOne />
      <ContentsTwo />
      <ContentsThree />
      <ContentsFour />
      <ContentsFive />
    </View>
  );
};
