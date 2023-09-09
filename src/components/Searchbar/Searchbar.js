import { Component } from 'react';
import { BtnSearch } from './Searchbar.styled';
import { Wrapper } from './Searchbar.styled';
import { InputArea } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
    // this.setState({ query: '' });
  };

  render() {
    return (
      <div>
        <header className="searchbar">
          <Wrapper onSubmit={this.handleSubmit}>
            <BtnSearch type="submit">
              <span>Search</span>
            </BtnSearch>
            <InputArea
              type="text"
              id="search"
              value={this.state.query}
              onChange={this.handleNameChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Wrapper>
        </header>
      </div>
    );
  }
}
