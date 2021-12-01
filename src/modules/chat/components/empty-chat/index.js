import React, { memo } from 'react';

import { TextStyled, ViewStyled } from './styled';

export const EmptyChat = memo(() => (
  <ViewStyled>
    <TextStyled>Select user to start chatting</TextStyled>
  </ViewStyled>
));
