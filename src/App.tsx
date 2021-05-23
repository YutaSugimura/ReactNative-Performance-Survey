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
import IsLoadingContext, {useIsLoadingState} from './context/isLoading';
import DictionaryContext from './context/dictionary';
import IndexListContext, {useIndexListState} from './context/indexList';
import {useSetup} from './hooks/setup';
import {Contents} from './components/contents';
import {ListItem} from './components/listItem';

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
  useSetup();

  const {isLoading} = useIsLoadingState();
  const {list} = useIndexListState();

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
