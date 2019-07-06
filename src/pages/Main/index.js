import React from 'react';

import ListTools from '../../components/ListTools';
import { Container, Header } from './styles';

const Main = () => (
  <Container>
    <Header>
      <h1>VUTTR</h1>
      <p>Very Useful Tools to Remember</p>
    </Header>

    <ListTools />
  </Container>
);

export default Main;
