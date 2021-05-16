import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDictionaryState} from '../context/dictionary';
import {useCounterCore} from '../hooks/counter';

type Props = {
  itemKey: string;
  borderTop?: boolean;
};

export const ListItem: React.VFC<Props> = ({itemKey, borderTop}) => {
  const {count, increment, decrement} = useCounterCore();
  const {dictionary} = useDictionaryState();
  const item = dictionary[itemKey];

  return (
    <View style={[styles.container, borderTop && styles.borderTop]}>
      <View style={[styles.box, styles.leftContainer]}>
        <Text>author: {item.author}</Text>
        <Text>title: {item.title}</Text>
        <Text>body: {item.description}</Text>
      </View>

      <View style={[styles.box, styles.rightContainer]}>
        <Text>{count}</Text>
        <View style={styles.buttonContainer}>
          <Button title="increment" onPress={increment} />
          <Button title="decrement" onPress={decrement} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 72,
    padding: 6,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  borderTop: {
    borderTopColor: '#aaa',
    borderTopWidth: 1,
  },
  box: {
    flex: 1,
  },
  leftContainer: {
    justifyContent: 'center',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});
