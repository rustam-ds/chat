import React, { memo } from 'react';

import { ButtonStyled, FormStyled, InputStyled } from './styled';

export const ChatForm = memo(({ inputValue, handleSubmit, handleInput, isDisabled }) => (
  <FormStyled onSubmit={handleSubmit}>
    <InputStyled
      disabled={isDisabled}
      placeholder={'Write a message...'}
      value={inputValue}
      onChange={handleInput}
    />
    <ButtonStyled disabled={isDisabled || !inputValue}>Send</ButtonStyled>
  </FormStyled>
));
