import { Component } from 'react';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import {fetchImages} from './Api'
// import axios from 'axios';
import { Audio } from 'react-loader-spinner'
;<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>




export class App extends Component{
    state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    loadMore: false,
    error: null,
    };
  
  
componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImages(query, page);
    }
  }

  getImages = async (query, page) => {
    if (!query) {
      return;
    }
    try {
      const { hits, totalHits } = await fetchImages(query, page);
      if (!hits.length) {
        this.setState({ loadMore: false });
        alert('Nothing was found for your request. Try something else');
      } else {
        this.setState((prevState) => ({
          images: [...prevState.images, ...hits],
          loadMore: this.state.page < Math.ceil(totalHits / this.state.per_page),
        }));
      }
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ isLoading: false });
    }
  };

    handleSubmit = (query) => {
      this.setState({ query, images: [], page: 1 });
    };
  

  onloadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    this.scrollToBottomButton();
  };




  render() {

        // const { images, loadMore } = this.state;

      return (
        <div>
          <Searchbar handleSubmit={this.handleSubmit} />
    </div>
  );
  }

};
