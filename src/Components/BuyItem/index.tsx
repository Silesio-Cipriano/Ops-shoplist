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
}

export function BuyItem({ id, price, title, quantity, total }: ListItemsProps) {
  return (
    <Container>
      <Line />
      <Top>
        <Title>{title}</Title>
      </Top>
      <LineCentral />
      <Bottom>
        <BottomElement>
          <Quantite>
            Quantidade
          </Quantite>
          <Qtd>{quantity}</Qtd>
        </BottomElement>
        <BottomElement>
          <Quantite>
            Preço
          </Quantite>
          <Qtd>{price} Mzn</Qtd>
        </BottomElement>

        <BottomElement>
          <Quantite>
            Total
          </Quantite>
          <Qtd>{total} Mzn</Qtd>
        </BottomElement>
      </Bottom>
    </Container>
  );
}