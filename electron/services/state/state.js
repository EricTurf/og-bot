let state = {};

const StateService = {
  set(newState) {
    state = { ...state, ...newState };
  },
  get(key) {
    if (key) return state[key];
    return state;
  },
};

const getStateService = () => StateService;

export default getStateService;
