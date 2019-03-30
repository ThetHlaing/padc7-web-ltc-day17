import {retrieveData,storeData} from "../utilies/localStorage";

export const fetchArticles = () => dispatch => {  
  const articles = retrieveData('articles');
  dispatch({
    type: 'FETCH_ARTICLES',
    payload : articles
  });
};

export const insertArticle = (article) => dispatch => {  
  const articles = retrieveData('articles');
  const mapped_array= articles.map(i => parseInt(i.id));
  const max_id = Math.max(...mapped_array);
  console.log(mapped_array,max_id,article.id);
  article.id = max_id + 1;
  articles.push(article);
  console.log('stored article',articles,article)
  storeData('articles',articles);
  dispatch({
    type: 'ADD_NEW_ARTICLE',
    article : article
  });
};


