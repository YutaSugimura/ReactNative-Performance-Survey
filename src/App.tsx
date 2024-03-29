/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

const App: React.VFC = () => {
  return <Screen />;
};

export default App;

const Screen: React.VFC = () => {
  const ContentSeven =
    require('./components/contents/contentSeven').ContentSeven;

  return (
    <SafeAreaView>
      <ContentSeven />
    </SafeAreaView>
  );
};
