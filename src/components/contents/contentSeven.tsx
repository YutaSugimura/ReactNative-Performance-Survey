import React from 'react';
import {Text, View} from 'react-native';
import {useMeasure} from '../../hooks/measure';

type Props = {};

export const ContentSeven: React.VFC<Props> = () => {
  const {isCompleted, results} = useMeasure();

  if (!isCompleted) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Result</Text>
      <Text>Measured 10 times</Text>
      {results.map((item, index) => (
        <Text key={`${index}_${item}`}>{item}ms</Text>
      ))}
    </View>
  );
};
