import firebase from 'firebase';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  MAIN_CATEGORY_FETCH_SUCCESS, 
  SUB_CATEGORY_FETCH_SUCCESS,
  ENG_CONTENT_FETCH_SUCCESS
} from './types';
import { MESSAGES } from '../constants/AppConstants';



export const categoryFetch = () => {

  return (dispatch) => {
    firebase.database().ref('/MainCategory')
      .on('value', snapshot => {
        dispatch({ type: MAIN_CATEGORY_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};


export const subCategoryFetch = ({ category }) => {

  const { id, trTitle } = category;

  return (dispatch) => {
    firebase.database().ref('/SubCategories')
    .orderByChild('mainCategoryId')
    .equalTo(id)
    .on('value', snapshot => {
        dispatch({ type: SUB_CATEGORY_FETCH_SUCCESS, payload: snapshot.val() });
        
        if(snapshot.val() == null){
          Alert.alert(MESSAGES.EMPTY_LIST);
        }else{
          Actions.subCategories({title: trTitle});
        }
      });
  };
};

export const engDetailContentFetch = ({ subCategory }) => {
  
  const { id } = subCategory;

  return (dispatch) => {
    firebase.database().ref('/EngContentList')
    .orderByChild('subCategoryId')
    .equalTo(id)
    .on('value', snapshot => {
        dispatch({ type: ENG_CONTENT_FETCH_SUCCESS, payload: snapshot.val() });
        if(snapshot.val() == null){
          Alert.alert(MESSAGES.EMPTY_LIST);
        }else{
          Actions.engDetailContentScreen();
        }        
      });
  };
};
