import React, {Component} from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';

import config from "config";
import { onImagesDrop } from "services/files";
import { ADD_ITEM } from 'api/redux/actions';

const StyledDropZone = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vh - ${config.style.headerHeight});
`;

class DropZone extends Component {
    componentDidMount() {
        window.addEventListener("dragover", e => e.preventDefault(),false);
        window.addEventListener("drop", e => e.preventDefault(),false);
        this.dropZone.addEventListener('drop', e => {
            onImagesDrop(e)
            .then(r => r.forEach(
                i => this.props.addItem(i)
            ))
            .catch(err => alert(err))
        }, false)
    };

    render(){
        const { children } = this.props;

        return <StyledDropZone ref={node => this.dropZone = node} >{children}</StyledDropZone>
    };
};

export default connect(null, dispatch => ({
    addItem: image => dispatch(ADD_ITEM(image)),
}))(DropZone);