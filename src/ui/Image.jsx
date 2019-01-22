import React, { Component } from 'react';

import { StyledImage, Selector } from './style';
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

    componentDidMount(){
        document.addEventListener('keydown', e => {
            switch(e.key){
                case "Backspace":
                    this.onDeletePress();
                    break;
                default:
                    break;
            }
        })
    }

    componentDidUpdate(_, state){
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.onMouseMove.bind(this))
            document.addEventListener('mouseup', this.onMouseUp.bind(this))
        } else if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.onMouseMove.bind(this))
            document.removeEventListener('mouseup', this.onMouseUp.bind(this))
        };
    };

    onDeletePress(){
        console.log("delete")
    }

    onMouseDown(e){
        e.preventDefault();
        e.stopPropagation();
        const x = this.image.offsetLeft;
        const y = this.image.offsetTop;
        this.setState({
            dragging: true,
            rel: {
                X: e.pageX - x,
                Y: e.pageY - y,
            }
        });
    };

    onMouseUp(e) {
        e.stopPropagation();
        e.preventDefault();
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

    select(e) {
        return this.setState({selected: !this.state.selected});
    };

    render(){
        const { id, url, filename, dimensions: {width, height}} = this.props;
        return <Selector 
            ref={n => this.image = n}
            key={id} 
            position={this.state.position}
            width={width}
            height={height}
            selected={this.state.selected}
            onMouseDown={this.onMouseDown.bind(this)}
        >
            <StyledImage 
                src={url} 
                title={filename} 
                alt={filename} 
                onClick={this.select.bind(this)}
            />

        </Selector>
    };
};