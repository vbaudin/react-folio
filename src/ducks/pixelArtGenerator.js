import * as R from 'ramda'
import { selectColor, selectEraseColor, selectMap } from '../selectors/pixelArtGenerator';

const model = () => ({
  map: [],
  color: "#ffffff"
});

const UPDATE_MAP = '@PAG/UPDATE_MAP'
const TOGGLE_ERASE_COLOR = '@PAG/TOGGLE_ERASE_COLOR'
const USER_COLOR = '@PAG/USER_COLOR';
const SET_PEINT = '@PAG/SET_PEINT';

// ---------------------------------------------------------------ActionCreator

export const setColor = color => ({
  type: USER_COLOR,
  payload: { color }
})

export const updateMap = map => ({
  type: UPDATE_MAP,
  payload: { map }
})

export const setEraseColor = () => ({
  type: TOGGLE_ERASE_COLOR,
})

// -----------------------------------------------------------------------Thunk

export const setPeint = (x, y) => (dispatch, getState) => {
  const tab = selectMap(getState());
  const eraseColor = selectEraseColor(getState());
  const userColor = selectColor(getState());
  const color = eraseColor || userColor;
  dispatch({ type: SET_PEINT, payload: { x, y, tab, eraseColor, userColor, color } });
  dispatch(updateMap(R.update(x, R.update(y, color, tab[x]), tab)))
}

//----------------------------------------------------------------------Reducer

export default (state = model(), action) => {
  switch (action.type) {
    case UPDATE_MAP:
      return { ...state, map: action.payload.map }
    case TOGGLE_ERASE_COLOR:
      return { ...state, eraseColor: R.isNil(state.eraseColor) ? "#ffffff" : undefined }
    case USER_COLOR:
      return { ...state, color: action.payload.color}
    default:
      return state
  }
}