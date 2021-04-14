import React from 'react';

import {DataProvider} from './context/DataContext';

import Page1 from './components/Page1';
import Page2 from './components/Page2';

import ChangeDataButton from './components/ChangeDataButton';

function App() {

  return(
    <DataProvider>
        <Page1 />
        <Page2 />
    </DataProvider>
  )
};

export default App;

