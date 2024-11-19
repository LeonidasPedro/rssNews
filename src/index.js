import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './store';
import Navigator from './routes.js';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );

};

export default App;

