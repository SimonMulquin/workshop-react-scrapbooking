import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledImage } from './style';

class Image extends Component {

    render(){
        const { id, url, filename, position, width} = this.props;
        return <StyledImage 
            key={id} 
            src={url} 
            title={filename} 
            alt={filename} 
            position={position}
            width={width}
        />
    };
};

export default connect(({preview: {items}}) => ({
    items,
}))(Image);