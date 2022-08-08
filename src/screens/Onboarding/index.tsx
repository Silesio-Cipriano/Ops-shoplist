import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Feather } from '@expo/vector-icons';
import WomanOnboarding from '../../assets/onboarding/Woman.svg';
import {
  Button,
  Container,
  Description,
  Title
} from './styles';

export function Onboarding() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  function handleChangeScreen() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Title>Gerencie{'\n'}suas compras de{'\n'}forma facil</Title>
      <WomanOnboarding height={200} />
      <Description>Não esqueça mais o que deve comprar e quanto gastar, a organização é tudo</Description>
      <Button onPress={handleChangeScreen}>
        <Feather name="chevron-right" size={39} color="white" />
      </Button>
    </Container>
  );
}