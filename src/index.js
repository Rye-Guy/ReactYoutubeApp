const API_KEY = 'AIzaSyCNXTuxT3aw_2AfPhk3VW2ibdJz9IUG8Es';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';

// Create a new component that generates some HTML
// After we create it we need to make sure it gets put in the DOM.

class App extends Component{
  constructor(props){
      super(props)
      
      this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'skateboards'}, (videos) =>{
        this.setState({videos});
    });


  }
  
    render(){
        
        return (
            <div>
                <SearchBar></SearchBar>
                <VideoDetail video={this.state.videos[0]}></VideoDetail>
                <VideoList videos={this.state.videos}></VideoList>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
