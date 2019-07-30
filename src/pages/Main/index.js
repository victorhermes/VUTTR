import React from 'react';

import MoomTool from '../../assets/images/MoomTools.svg';
import ListTools from '../../components/ListTools';
import { Container, Header } from './styles';

const Main = () => (
  <Container>
    <Header>
      <img src={MoomTool} alt="Moom Tools" />
    </Header>

    <ListTools />
  </Container>
);

export default Main;
