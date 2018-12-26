import React, {Component} from 'react';
import styled from "styled-components";

import config from "config";
import { onImageDrop } from "services/files";

const StyledDropZone = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vh - ${config.style.headerHeight});
`;

export default class DropZone extends Component {
    constructor(props){
        super(props);

    };

    componentDidMount() {
        window.addEventListener("dragover", e => e.preventDefault(),false);
        window.addEventListener("drop", e => e.preventDefault(),false);
        this.dropZone.addEventListener('drop', onImageDrop, false)
    };

    render(){
        const { children } = this.props;

        return <StyledDropZone ref={node => this.dropZone = node} >{children}</StyledDropZone>
    };
};