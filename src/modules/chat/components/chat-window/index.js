import React, { memo } from 'react';

import { ChatWindowItem } from 'src/modules/chat/components/chat-window-item';

import { ViewStyled } from './styled';

export const ChatWindow = memo(({ messages, userId }) => (
  <ViewStyled>
    {messages?.map((message, index) => (
      <ChatWindowItem text={message.text} key={index} isItemRight={message.id === userId} />
    ))}
  </ViewStyled>
));
