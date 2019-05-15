import React from 'react';

import { Container, Content } from './styles';

const Modal = ({ size }) => (
  <Container>
    <Content size={size}>
      {' '}
      <h1>testmodal</h1>{' '}
    </Content>
  </Container>
);

export default Modal;
