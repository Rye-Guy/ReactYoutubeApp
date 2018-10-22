//import react pull off the Component amd store it in Component
import React, {Component} from 'react';


class SearchBar extends Component{
    
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render(){
        //using setState allows us to maintain continutity. while react does a shit tone with the state Object
        return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={(event) => this.onInputChange(event.target.value)}>
            </input>
            {/* Value of the Input: {this.state.term} */}
        </div>
        );
    };

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;