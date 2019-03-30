import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
export default class DeleteArticle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToHome : false
    }
  }
  successDelete = () =>{
    this.setState({
      redirectToHome : true
    })
  }
  render() {

        const id = this.props.match.params.id;
        const articles = this.props.articles;
        const currentUser = this.props.currentUser;
        const currentArticle =  articles.find( item => item.id == id);
        
        
        let allowToDelete = false;
        if(currentUser && currentArticle !== undefined){
          if(currentUser.id === currentArticle.created_by){
            allowToDelete = true;
          }
        }

    return (
      <React.Fragment>
        { (this.state.redirectToHome || !allowToDelete) &&  <Redirect to={`/`}/> }
        { currentArticle === undefined ? (
          <div>404 - Content not found</div>
        ) : (
          <div>
            <h2>
              Are you sure you want to delete "{currentArticle.title}"?
            </h2>
            <button onClick={this.props.deleteArticleEvent.bind(this,currentArticle.id,this.successDelete)}>Yes</button> <Link to={`/article/${currentArticle.id}`}>Cancel</Link>
            <hr />
        </div>
        )}
      </React.Fragment>
    );
  }
}
