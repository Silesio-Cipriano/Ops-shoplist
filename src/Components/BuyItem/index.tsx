import React from 'react';
import DashedLine from 'react-native-dashed-line';
import { useTheme } from 'styled-components';
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
  name: string;
  quantity: number,
  price: number,
  total: number,
  status: boolean,
  onPress: () => void;
  onLongPress: () => void;
}
export function BuyItem({ id, price, name, quantity, total, onPress, onLongPress, status }: ListItemsProps) {
  const theme = useTheme();

  return (
    <Container onLongPress={onLongPress} onPress={onPress} status={status} activeOpacity={1}>
      <Line />
      <Top>
        <Title status={status}>{name}</Title>
      </Top>
      <LineCentral>
        <DashedLine dashLength={4} dashThickness={1.2} dashGap={6} dashColor={theme.colors.text.secondary} />
      </LineCentral>
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