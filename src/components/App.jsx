import { Component } from 'react';
import React from 'react';
import {Searchbar} from './Searchbar/Searchbar'



export class App extends Component{
    state = {
    query: '',
    images: [],
    page: 1,
    };
  
      handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: `${Date.now()}/${evt.target.elements.query.value}`,
      images: [],
      page: 1,
    });
      };
  
  



  render() {
      return (
        <div>
          <Searchbar/>
    </div>
  );
  }

};
