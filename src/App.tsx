/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import IsLoadingContext from './context/isLoading';
import DictionaryContext from './context/dictionary';
import IndexListContext from './context/indexList';

const App: React.VFC = () => {
  return (
    <IsLoadingContext>
      <DictionaryContext>
        <IndexListContext>
          <Screen />
        </IndexListContext>
      </DictionaryContext>
    </IsLoadingContext>
  );
};

export default App;

const Screen: React.VFC = () => {
  const useSetup = require('./hooks/setup').useSetup;
  useSetup();

  const {isLoading} = require('./context/isLoading').useIsLoadingState();
  const {list} = require('./context/indexList').useIndexListState();

  const ListItem = require('./components/listItem').ListItem;

  const renderItem = useCallback(
    ({item, index}: {item: string; index: number}) => (
      <ListItem itemKey={item} borderTop={index === 0 ? true : false} />
    ),
    [],
  );

  const keyExtractor = useCallback(
    (item: string) => `list_item_key_${item}`,
    [],
  );

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const Contents = require('./components/contents').Contents;

  return (
    <SafeAreaView>
      <FlatList
        data={list}
        extraData={list}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListHeaderComponent={Contents}
      />
    </SafeAreaView>
  );
};
