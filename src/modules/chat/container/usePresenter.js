import { useMemo, useState } from 'react';
import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const {
    dispatch,
    appStore: { user, participants, selectedParticipantId },
  } = useStoreon('appStore');
  const [inputValue, setInputValue] = useState('');
  const userWithMessages = useMemo(
    () => participants.find((user) => user.id === selectedParticipantId),
    [participants, selectedParticipantId],
  );

  const hasContent = Boolean(userWithMessages?.messages.length);
  const isFormDisabled = !Boolean(selectedParticipantId);

  const changeInputValue = (event) => setInputValue(event.target.value);

  const clearInput = () => setInputValue('');

  const sendMessage = (event) => {
    event.preventDefault();

    const a = participants.map((participant) => {
      if (participant.id === selectedParticipantId) {
        return {
          ...participant,
          messages: [...participant.messages, { id: user.id, text: inputValue }],
        };
      }
      return participant;
    });
    dispatch('app/set-message', { value: a });

    clearInput();
  };

  return {
    isDisabled: isFormDisabled,
    userId: user.id,
    inputValue,
    hasContent,
    messages: userWithMessages?.messages,
    sendMessage,
    changeInputValue,
  };
};
