import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigation/rootNavigator';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const App = () => {
  const store = setupStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
