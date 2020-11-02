import React, { Component } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import './SearchResult.css'

class SearchResults extends Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <Tracklist isRemoval={false} tracks={this.props.searchResults} onAdd={this.props.onAdd} />
            </div>
        )
    }
}

export default SearchResults
