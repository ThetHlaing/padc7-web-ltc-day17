import {retrieveData,storeData} from "../utilies/localStorage";

export const fetchArticles = () => dispatch => {  
  const articles = retrieveData('articles');
  dispatch({
    type: 'FETCH_ARTICLES',
    payload : articles
  });
};

