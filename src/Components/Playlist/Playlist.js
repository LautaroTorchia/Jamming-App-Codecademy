import React, { Component } from 'react'
import Tracklist from '../Tracklist/Tracklist'
import './Playlist.css'

export class Playlist extends Component {
    constructor(props){
        super(props)
        this.handleNameChange=this.handleNameChange.bind(this)
    }
    handleNameChange(e){
        this.props.onNameChange(e.target.value);
    }
    render() {
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} defaultValue={this.props.playlistName}/>
                <Tracklist tracks={this.props.playlistTracks} onRemove={this.props.onRemove}  isRemoval={true}/>
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist
