import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import {
  ButtonJump,
  ButtonNext,
  Container,
  FooterArea,
  LogoArea,
  Title,
} from './styles';
import Logo from '../../assets/Logo.svg';

import { BackWithIcon } from '../../Components/BackWithIcon';
import { Footer } from '../../Components/Onboarding/Footer';
import { ButtonAction } from '../../Components/ButtonAction';
import { onboarding } from '../../utils/onboardingData';
import { useState, useContext } from 'react';
import { useAuth } from '../../hooks/auth';
export function Onboarding() {
  const { user,defaultLang } = useAuth();
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [index, setIndex] = useState(0);
  function handleChangeScreen() {
    navigation.navigate("LanguageInit");
  }
  function nextOnb() {
    if (index < 3) {
      let i = index + 1;
      setIndex(i);
    }
  }

  function prevOnb() {
    if (index > 0) {
      let i = index - 1;
      setIndex(i);
    }
  }


  function skip() {
    setIndex(3);
  }

  const {dataMessage}=useAuth();
  return (
    <Container>
      {index > 0 ? <BackWithIcon backOnb={prevOnb} />
        :
        <LogoArea>
          <Logo />
        </LogoArea>

      }
      {onboarding[index].Body}

      {index < 3 ?
        <Footer onNext={nextOnb} skip={skip} title={dataMessage.onboarding.skip} />
        :
        <ButtonAction title={dataMessage.onboarding.start} disabled={false} onPress={handleChangeScreen} />
      }
    </Container>
  );
}