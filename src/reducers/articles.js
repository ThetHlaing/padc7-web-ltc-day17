const articles = (state = [], action) => {
    switch (action.type) {
      case 'ADD_NEW_ARTICLE':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content : action.content
        }
      ];
      case 'FETCH_ARTICLES':
        return [...action.payload]
      default:
        return state
    }
  }

  export default articles