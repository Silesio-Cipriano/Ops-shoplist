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
}

export function BuyItem({ id, price, title, quantity, total, onPress, status }: ListItemsProps) {

  return (
    <Container onPress={onPress} status={status}>
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