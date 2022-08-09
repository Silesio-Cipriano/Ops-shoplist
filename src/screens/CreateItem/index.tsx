import React, { useState } from 'react';
import { BackButton } from '../../Components/BackButton';
import { ButtonAction } from '../../Components/ButtonAction';
import { Input } from '../../Components/Input';
import { InputNumber } from '../../Components/InputNumber';

import {
  Container,
  Content,
  InputGroup,
  StatusArea,
  Status,
  StatusButton,
  TitleButton,
  SelectedBtn,
  Circle,
  Rectangle,
} from './styles';

export function CreateItem() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);


  function handleBackScreen() {
  }

  function handleTextChange(text: string) {
    setName(text);
    if (text) {
      handleStatusChangeFalse();
    } else {
      handleStatusChangeTrue();
    }
  }
  const [buttonStatus, setButtonStatus] = useState(true);
  const [selected, setSelected] = useState(true);

  function handleStatusChangeFalse() {
    setButtonStatus(false);
  }

  function handleStatusChangeTrue() {
    setButtonStatus(true);
  }

  function handleSelected() {
    setSelected(!selected);
  }

  return (
    <Container>
      <BackButton name="Nova Lista" onPress={() => handleBackScreen()} />
      <Content>
        <Input name={name} titlePlaceholder='Nome' handleTextChange={handleTextChange} />
        <InputGroup>
          <InputNumber name={name} titlePlaceholder={"Preço"} handleTextChange={handleTextChange} />
          <InputNumber name={name} titlePlaceholder={"Quantidade"} handleTextChange={handleTextChange} />
        </InputGroup>
        <StatusArea>
          <Status>Categoria</Status>
          <StatusButton onPress={handleSelected}>
            <TitleButton>Comprado</TitleButton>
            <SelectedBtn>
              <Circle selected={selected} />
              {/* <Rectangle /> */}
            </SelectedBtn>
          </StatusButton>
        </StatusArea>
      </Content>
      <ButtonAction title={"Criar Item"} disabled={buttonStatus} onPress={() => { }} />
    </Container>
  );
}