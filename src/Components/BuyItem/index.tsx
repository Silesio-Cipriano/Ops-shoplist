import React from 'react';

import {
  Container,
  Top,
  Title,
  Line,
  LineCentral,
  Bottom,
  Quantite,
  Qtd,
  BottomElement,
} from './styles';

interface ListItemsProps {
  id: string;
  title: string;
  quantity: number,
  price: number,
  total: number,
  status: boolean,
  onPress: () => void;
  onLongPress: () => void;
}

export function BuyItem({ id, price, title, quantity, total, onPress, onLongPress, status }: ListItemsProps) {

  return (
    <Container onLongPress={onLongPress} onPress={onPress} status={status} activeOpacity={1}>
      <Line />
      <Top>
        <Title status={status}>{title}</Title>
      </Top>
      <LineCentral />
      <Bottom>
        <BottomElement>
          <Quantite status={status}>
            Quantidade
          </Quantite>
          <Qtd status={status}>{quantity}</Qtd>
        </BottomElement>
        <BottomElement>
          <Quantite status={status}>
            Preço
          </Quantite>
          <Qtd status={status}>{price} Mzn</Qtd>
        </BottomElement>

        <BottomElement>
          <Quantite status={status}>
            Total
          </Quantite>
          <Qtd status={status}>{total} Mzn</Qtd>
        </BottomElement>
      </Bottom>
    </Container>
  );
}