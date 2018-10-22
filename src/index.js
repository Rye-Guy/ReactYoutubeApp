const API_KEY = 'AIzaSyCNXTuxT3aw_2AfPhk3VW2ibdJz9IUG8Es';
import _ from 'lodash';
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
      
      this.state = {
          videos: [],
          selectedVideo: null
          
        };

        this.videoSearch('skateboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
        this.setState({
            videos: videos,
            selectedVideo: videos[0]
        });
    });

  }
  
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 350);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}></SearchBar>
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}></VideoList>
            </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector('.container'));
