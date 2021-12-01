import React from 'react';

import { usePresenter } from './usePresenter';
import { ButtonStyled, ViewStyled } from './styled';

export const UsersListContainer = () => {
  const { participants, selectedParticipantId, handleSelect } = usePresenter();

  return (
    <ViewStyled>
      {participants.map((participant) => (
        <ButtonStyled
          key={participant.id}
          isActive={participant.id === selectedParticipantId}
          onClick={() => handleSelect(participant.id)}
        >
          {participant.name}
        </ButtonStyled>
      ))}
    </ViewStyled>
  );
};
