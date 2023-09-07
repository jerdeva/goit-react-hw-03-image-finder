import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase()});
  };

  handleSubmit = event => {
    event.preventDefault();
        this.props.handleSubmit(this.state.query);
        this.setState({ query: '' });
    };
  

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>
          <input
            type="text"
            id="search"
            value={this.state.query}
            onChange={this.handleNameChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos" />
        </form>
      </header>
    );
  }
}
