import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {useCounterCore} from '../../hooks/counter';

type Props = {};

export const ContentsOne: React.VFC<Props> = () => {
  const [state, setState] = useState<string>('');
  const {count, increment, decrement} = useCounterCore();

  useEffect(() => {
    let isMounted = true;

    const init = () => {
      isMounted && setState('SubTitle');
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View>
      <Text>Contents One</Text>
      <Text>Title</Text>
      <Text>{state}</Text>
      <Text>
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text
      </Text>

      <View>
        <Text>{count}</Text>

        <View>
          <Button title="increment" onPress={increment} />
          <Button title="decrement" onPress={decrement} />
        </View>
      </View>
    </View>
  );
};
