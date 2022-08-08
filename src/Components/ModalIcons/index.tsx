import React, { ReactNode } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';

import PopCornSvg from '../../assets/ItemGroup/Icon_popcorn.svg'
import CreditCardSvg from '../../assets/ItemGroup/Shopingin-Fly-Shopingin-Fly-Credit Machine.svg'
import CoinSvg from '../../assets/ItemGroup/Shopingin-Isometric-Shopingin-Isometric-Coin.svg'
import EggSvg from '../../assets/ItemGroup/Icon_eggs.svg'
import PaperBagSvg from '../../assets/ItemGroup/Shopingin-Isometric-Paperbag.svg'
import BreadSvg from '../../assets/ItemGroup/Icon_bread.svg'

import {
  Container,
  AreaModal,
  HeaderModal,
  TitleModal,
  BodyModal,
  IconsArea,
  IconList,
} from './styles';
interface ModalIconsProps {
  visible: boolean;
  fModalVisible: () => void;
  fChangeIcon: (index?: number) => void;
}
interface IconProps {
  id: string;
  Icon: ReactNode;
}
export function ModalIcons({ visible, fModalVisible, fChangeIcon }: ModalIconsProps) {
  const data = [{
    id: uuid.v4().toString(),
    Icon: <PopCornSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <CreditCardSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <CoinSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <EggSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <PaperBagSvg width={66} />
  }, {
    id: uuid.v4().toString(),
    Icon: <BreadSvg width={66} />
  }
  ]
  const theme = useTheme();
  return (
    <Container statusBarTranslucent transparent visible={visible} animationType={'fade'}  >
      <AreaModal>
        <BodyModal>
          <HeaderModal>
            <TitleModal>Icons</TitleModal>
            <TouchableOpacity onPress={fModalVisible}>
              <Feather name="x" size={26} color={theme.colors.primary} />
            </TouchableOpacity>
          </HeaderModal>
          <IconsArea>
            <FlatList<IconProps>
              data={data}
              showsVerticalScrollIndicator={false}
              numColumns={3}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              renderItem={({ item, index }) => (
                <IconList onPress={() => fChangeIcon(index)}>
                  {item.Icon}
                </IconList>
              )
              }
            />
          </IconsArea>
        </BodyModal>
      </AreaModal>
    </Container >
  );
}