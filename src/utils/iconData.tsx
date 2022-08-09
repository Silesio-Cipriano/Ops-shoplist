import uuid from 'react-native-uuid';

import PopCornSvg from '../assets/ItemGroup/Icon_popcorn.svg'
import CreditCardSvg from '../assets/ItemGroup/Shopingin-Fly-Shopingin-Fly-Credit Machine.svg'
import CoinSvg from '../assets/ItemGroup/Shopingin-Isometric-Shopingin-Isometric-Coin.svg'
import EggSvg from '../assets/ItemGroup/Icon_eggs.svg'
import PaperBagSvg from '../assets/ItemGroup/Shopingin-Isometric-Paperbag.svg'
import BreadSvg from '../assets/ItemGroup/Icon_bread.svg'
import { ReactNode } from 'react';
interface IconProps {
  id?: string;
  Icon?: ReactNode;
}

export const iconData: IconProps[] = [{
  id: "1",
  Icon: <PopCornSvg width={66} />
}, {
  id: "2",
  Icon: <CreditCardSvg width={66} />
}, {
  id: "3",
  Icon: <CoinSvg width={66} />
}, {
  id: "4",
  Icon: <EggSvg width={66} />
}, {
  id: "5",
  Icon: <PaperBagSvg width={66} />
}, {
  id: "6",
  Icon: <BreadSvg width={66} />
}
]



export function formatIcon(width: number, height: number) {
  const newIcon: IconProps[] = [{
    id: "1",
    Icon: <PopCornSvg width={width} height={height} />
  }, {
    id: "2",
    Icon: <CreditCardSvg width={width} height={height} />
  }, {
    id: "3",
    Icon: <CoinSvg width={width} height={height} />
  }, {
    id: "4",
    Icon: <EggSvg width={width} height={height} />
  }, {
    id: "5",
    Icon: <PaperBagSvg width={width} height={height} />
  }, {
    id: "6",
    Icon: <BreadSvg width={width} height={height} />
  }
  ]

  return newIcon;
}