import React from "react";
import Article from "../Article";

export default class ArticleList extends React.Component {
  render() {
    const articles = this.props.articles;
    const users = this.props.users;
    return articles.map((article, index) => {
      const author = users.find(obj => obj.id === article.created_by);
      return <Article key={index} article={article} author={author} />;
    });
  }
}
