import Logo from '../../assets/Logo.svg';
import { BackWithIcon } from '../Components/BackWithIcon';
import { Onb01 } from '../Components/Onboarding/Onb01';
import { Onb02 } from '../Components/Onboarding/Onb02';
import { Onb03 } from '../Components/Onboarding/Onb03';
import { Onb04 } from '../Components/Onboarding/Onb04';
import { Footer } from '../Components/Onboarding/Footer';
import { ButtonAction } from '../Components/ButtonAction';
import { ReactNode } from 'react';

interface OnboardingDataProps {
  Body: ReactNode;
}
export const onboarding: OnboardingDataProps[] = [
  {
    Body: <Onb01 />,
  },
  {
    Body: <Onb02 />,
  },
  {
    Body: <Onb03 />,
  },
  {
    Body: <Onb04 />,
  },
]