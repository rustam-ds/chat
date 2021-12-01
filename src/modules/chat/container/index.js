import React from 'react';

import { ChatForm } from 'src/modules/chat/form/chat-form';
import { ChatWindow } from 'src/modules/chat/components/chat-window';
import { EmptyChat } from 'src/modules/chat/components/empty-chat';

import { usePresenter } from 'src/modules/chat/container/usePresenter';
import { ViewStyled } from './styled';

export const ChatContainer = () => {
  const { hasContent, messages, isDisabled, inputValue, userId, sendMessage, changeInputValue } =
    usePresenter();

  return (
    <ViewStyled>
      {hasContent ? <ChatWindow messages={messages} userId={userId} /> : <EmptyChat />}
      <ChatForm
        isDisabled={isDisabled}
        inputValue={inputValue}
        handleSubmit={sendMessage}
        handleInput={changeInputValue}
      />
    </ViewStyled>
  );
};
