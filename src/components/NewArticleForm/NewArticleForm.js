import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";

export default class NewArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.content = React.createRef();
    this.state = {
      completeArticle: false
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const newArticle = {
      title: this.title.current.value,
      content: this.content.current.value
    };
    this.props.addNewArticleEvent(newArticle);
    this.setState({
      completeArticle: true
    });
  };

  render() {
    if (this.state.completeArticle) return <Redirect to="/" />;

    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="title">Title : </label>
        <input id="title" required ref={this.title} />
        <br />
        <label htmlFor="content">Content</label>
        <textarea id="content" required ref={this.content} />
        <br />
        <button type="submit">Save</button>
      </form>
    );
  }
}
