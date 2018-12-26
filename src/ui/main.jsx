import React from 'react';

import DropZone from 'ui/HOC/DropZone';
import { 
  Main,
  Header,
} from "./style";

export default () => <Main>
  <Header>React Scrapbooking</Header>
  <DropZone>
    Gimme some files
  </DropZone>
</Main>