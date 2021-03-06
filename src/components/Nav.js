import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

/**
 *  SearchForm renders the search action
 * */
class Nav extends Component {
  state = {
    searchText: "",
  };
  //setting the state of the search value when the input field is typed in
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  //search action for the search value and pushes search value to the browser's memory
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    this.props.history.push(`/search/${this.query.value}`);
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="search"
            name="search"
            onChange={this.onSearchChange}
            ref={(input) => (this.query = input)}
            placeholder="Search"
            required
          />
          <button type="submit" className="search-button">
            <svg
              fill="#fff"
              height="24"
              viewBox="0 0 23 23"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </form>
        <h3>Search for your favourite images!</h3>

        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/sunsets">Sunsets</NavLink>
            </li>
            <li>
              <NavLink to="/football">Football</NavLink>
            </li>
            <li>
              <NavLink to="/stars">Stars</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
