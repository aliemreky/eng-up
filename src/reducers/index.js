import { combineReducers } from 'redux';
import EngUPReducer from './EngUPReducer';
import SubCategoryReducer from './SubCategoryReducer';
import EngDetailContentReducer from './EngDetailContentReducer';

export default combineReducers({
  mainCategories: EngUPReducer,
  subCategories: SubCategoryReducer,
  engDetailContent : EngDetailContentReducer
});
