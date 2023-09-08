import { Component } from 'react';
import React from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { fetchImages } from './Api'
import {ImageGallery} from './ImageGallery/ImageGallery'
import {ButtonLoadMore} from './Button/Button'
import { Loader } from './Loader/Loader'
  



export class App extends Component{
    state = {
    query: '',
    images: [],
    page: 1,
    per_page: 12,
    loadMore: false,
    modal:false,
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
  

    loadMore = () => {
      this.setState((prevState) => ({ page: prevState.page + 1 }));
    };

   toggleModal = id => {
    this.setState({ modal: !this.state.modal, id: id });
   };
  
    closeModal = () => {
    this.setState({ modal: !this.state.modal });
  };




  render() {
        const { images, loadMore, loading, error } = this.state;
      return (
        <div>
           {loading && <Loader/>}
          <Searchbar handleSubmit={this.handleSubmit} />
          {loading && <Loader/>}
        {error && !loading && <div>OOPS! THERE WAS AN ERROR!</div>}
          < ImageGallery
            images={images}
          />
           {loading && <Loader/>}
          {loadMore && <ButtonLoadMore onloadMore={this.loadMore} />}
    </div>
  );
  }

};
