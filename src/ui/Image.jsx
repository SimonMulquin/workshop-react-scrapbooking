import React, { Component } from 'react';

import { StyledImage } from './style';
import config from 'config';

const { headerHeight } = config.style;

export default class Image extends Component {
    constructor(props){
        super(props);

        const { position } = this.props;

        this.state={
            dragging: false,
            rel: {
                X: 0,
                Y: 0,
            },
            position,
        };
    };

    componentDidUpdate(_, state){
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove.bind(this))
            document.addEventListener('mouseup', this.onMouseUp.bind(this))
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove.bind(this))
            document.removeEventListener('mouseup', this.onMouseUp.bind(this))
        };
    };

    onMouseDown(e){
        e.preventDefault();
        e.stopPropagation();
        document.body.style.cursor = "move";
        const x = this.image.offsetLeft;
        const y = this.image.offsetTop;
        this.setState({
            dragging: true,
            rel: {
                X: e.pageX - x,
                Y: e.pageY - y + headerHeight,
            }
        });
    };

    onMouseUp(e) {
        e.stopPropagation();
        e.preventDefault();
        document.body.style.cursor = "default";
        this.setState({dragging: false});
    };

    onMouseMove(e) {
        e.stopPropagation()
        e.preventDefault()
        if (!this.state.dragging) return
        this.setState({
            position: {
                X: e.pageX - this.state.rel.X,
                Y: e.pageY - this.state.rel.Y,
            },
        });
    };

    render(){
        const { id, url, filename, width} = this.props;
        return <StyledImage 
            ref={n => this.image = n}
            key={id} 
            src={url} 
            title={filename} 
            alt={filename} 
            position={this.state.position}
            width={width}
            onMouseDown={this.onMouseDown.bind(this)}
        />
    };
};