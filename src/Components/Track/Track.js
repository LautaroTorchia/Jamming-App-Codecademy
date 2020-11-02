import React, { Component } from 'react'
import './Track.css'

export class Track extends Component {
    constructor(props){
        super(props)
        this.addTrack=this.addTrack.bind(this)
        this.removeTrack=this.removeTrack.bind(this)
    }
    addTrack(){
        this.props.onAdd(this.props.track);
    }
    removeTrack(){
        this.props.onRemove(this.props.track)
    }
    renderAction(){
        if (this.props.isRemoval) return<button className="Track-action" onClick={this.removeTrack}>-</button>
        else return <button className="Track-action" onClick={this.addTrack}> + </button>
        
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.album} | {this.props.track.artist} </p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}

export default Track
