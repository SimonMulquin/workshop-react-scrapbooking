import styled from "styled-components";

import config from "config";

export const Main = styled.div`
    display: block;
    position: relative;
    width: 100%;
`;

export const Header = styled.header`
    display: block;
    position: relative;
    padding: 0 1em;
    line-height: ${config.style.headerHeight}px;
    width: 100%;
    color: #61dafb;
    background-color: #20232a;
    overflow: hidden;
`;

export const StyledDropZone = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vh - ${config.style.headerHeight}px);
`;

export const Container = styled.main`
    display: block;
    position: relative;
    width: 100%;
`;

export const StyledImage = styled.img`
    display: block;
    position: absolute;
    left: ${({position: {X}}) => X}px;
    top: ${({position: {Y}}) => Y}px;
    index: ${({position: {Z}}) => Z};
    width: ${({width}) => width}px;
    height: auto;
`;