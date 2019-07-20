export const CHANGE_DRAK_MODE = "ui/drakMode";

const initialState = {
  drakMode: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DRAK_MODE: {
      return {
        ...state,
        drakMode: !state.drakMode
      };
    }

    default: {
      return { ...state };
    }
  }
};

export const toggleSwitch = () => dispatch => {
  dispatch({ type: CHANGE_DRAK_MODE });
};
