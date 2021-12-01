import React from 'react';

import { UsersListContainer } from 'src/modules/users-list/container';
import { ChatContainer } from 'src/modules/chat/container';

import styled from 'src/theme';

export const App = () => {
  return (
    <AppStyled>
      <UsersListContainer />
      <ChatContainer />
    </AppStyled>
  );
};

const AppStyled = styled.div`
  display: flex;
`;
