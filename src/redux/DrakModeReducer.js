import { CHANGE_DRAK_MODE } from "../action-types";
let nightTimeStart = 18;
let nightTimeEnd = 6;
let current = new Date();
let currentHour = current.getHours();
let nowTime;
currentHour >= nightTimeStart || currentHour <= nightTimeEnd
  ? (nowTime = true)
  : (nowTime = false);

const initialState = {
  drakMode: nowTime
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
