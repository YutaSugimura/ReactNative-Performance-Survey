import React from 'react';
import {View} from 'react-native';
import {ContentsOne} from './contentsOne';
import {ContentsTwo} from './contentsTwo';
import {ContentsThree} from './contentsThree';
import {ContentsFour} from './contentsFour';
import {ContentsFive} from './contentsFive';

export const Contents: React.VFC = () => {
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
