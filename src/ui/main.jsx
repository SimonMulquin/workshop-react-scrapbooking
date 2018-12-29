import React from 'react';
import { Provider } from 'react-redux';

import store from 'api/redux';
import DropZone from 'ui/HOC/DropZone';
import Preview from 'ui/Components/Preview/main';
import { 
  Main,
  Header,
} from "./style";

export default () => <Provider store={store}>
  <Main>
    <Header>React Scrapbooking</Header>
    <DropZone>
      <Preview/>
    </DropZone>
  </Main>  
</Provider>