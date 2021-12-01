import React from 'react';

import { TextStyled, ViewStyled } from './styled';

export const ChatWindowItem = ({ text, isItemRight }) => (
  <ViewStyled isRight={isItemRight}>
    <TextStyled>{text}</TextStyled>
  </ViewStyled>
);
