import React from 'react';
import { BackButton } from '../../Components/BackButton';
import { OptionSettings } from '../../Components/OptionSettings';
import PerfilIcon from '../../assets/Settings/Iconly-Broken-Profile.svg'
import ThemeIcon from '../../assets/Settings/Iconly-Broken-Heart.svg'
import StarIcon from '../../assets/Settings/Iconly-Broken-Star.svg'
import OrdeIcon from '../../assets/Settings/Iconly-Broken-Chart.svg'
import Logo from '../../assets/Logo.svg';
import {
  Container,
  Slogan,
  TitleSlogan,
  OptionArea,
  Footer,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function Settings() {
  const navigation = useNavigation<StackNavigationProp<any>>();


  function handleBackScreen() {
    navigation.goBack();
  }

  function handlePerfilScreen() {
    navigation.navigate("Perfil");
  }

  function handleThemesScreen() {
    navigation.navigate("Themes");
  }

  function handleLanguageScreen() {
    navigation.navigate("Language");
  }
  return (
    <Container>
      <BackButton name='Definicao' onPress={handleBackScreen} />
      <OptionArea>
        <OptionSettings title={"Perfil"} icon={<PerfilIcon />} onPress={handlePerfilScreen} />
        <OptionSettings title={"Temas"} icon={<ThemeIcon />} onPress={handleThemesScreen} />
        <OptionSettings title={"Pais / Lingua"} icon={<StarIcon />} onPress={handleLanguageScreen} />
      </OptionArea>
      <Slogan>
        <OrdeIcon />
        <TitleSlogan>DuoMaster</TitleSlogan>
      </Slogan>
      <Footer>
        <Logo width={108} height={90} />
      </Footer>
    </Container>
  );
}