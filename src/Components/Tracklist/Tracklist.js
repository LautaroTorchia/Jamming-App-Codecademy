import React, { Component } from 'react'
import Track from '../Track/Track'
import './Tracklist.css'
export class Tracklist extends Component {
    render() {
        return (
                <div className="TrackList">
                    {(this.props.tracks).map(currentSong => <Track isRemoval={this.props.isRemoval} track={currentSong} key={currentSong.id} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>)}
                </div>
        )
    }
}

export default Tracklist
