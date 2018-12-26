import React, {Component} from 'react';


export default class DropZone extends Component {
    constructor(props){
        super(props);

    }

    render(){
        const { children, className } = this.props;

        return <div className={className} ref={node => this.dropZone = node} >{children}</div>
    }
}