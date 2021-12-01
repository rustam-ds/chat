import { useStoreon } from 'storeon/react';

export const usePresenter = () => {
  const {
    dispatch,
    appStore: { participants, selectedParticipantId },
  } = useStoreon('appStore');

  const selectUser = (id) => dispatch('app/set-selected-participant-id', { value: id });

  return {
    participants,
    selectedParticipantId,
    handleSelect: selectUser,
  };
};
