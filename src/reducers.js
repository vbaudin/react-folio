import { combineReducers } from 'redux';
import app from './ducks/app';
import pixelArtGenerator from './ducks/pixelArtGenerator';

export default combineReducers({
  app,
  pixelArtGenerator
});
