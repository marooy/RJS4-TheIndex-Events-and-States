import React, { Component } from "react";
import AuthorDetail from "./AuthorDetail";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  state = {
    currentAuthor: null,

    filteredAuthors: authors
  };
  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };
  setFilter = query => {
    let filterAuthors = authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({
      filteredAuthors: filterAuthors
    });
  };

  display = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          setFilter={this.setFilter}
        />
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar Author={this.selectAuthor} />
          </div>
          <div className="content col-10 ">{this.display()}</div>
        </div>
      </div>
    );
  }
}

export default App;
