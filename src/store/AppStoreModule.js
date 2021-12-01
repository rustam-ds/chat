const initialState = {
  user: {
    id: 0,
  },
  participants: [
    {
      id: 1,
      name: 'Ivan',
      messages: [],
    },
    {
      id: 2,
      name: 'Peter',
      messages: [],
    },
    {
      id: 3,
      name: 'Anton',
      messages: [],
    },
  ],
  selectedParticipantId: null,
};

export const appStoreModule = (store) => {
  store.on('@init', () => ({
    appStore: { ...initialState },
  }));
  store.on('app/set-selected-participant-id', (state, data) => ({
    appStore: { ...state.appStore, selectedParticipantId: data.value },
  }));
  store.on('app/set-message', (state, data) => ({
    appStore: {
      ...state.appStore,
      participants: data.value,
    },
  }));
};
