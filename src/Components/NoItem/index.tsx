import React from 'react';
import NoItemSvg from '../../assets/NoItem.svg'

import {
  Container,
  Message
} from './styles';

export function NoItem() {
  return (
    <Container>
      <NoItemSvg width={140} />
      <Message>Sem item</Message>
    </Container>
  );
}