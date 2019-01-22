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
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Selector = styled.div.attrs(
    ({ position: {X, Y, Z}, selected, width, height }) => ({
        style: {
            left: `${X - (selected ? config.style.selectorBorderSize : 0)}px`,
            top: `${Y - (selected ? config.style.selectorBorderSize : 0)}px`,
        }
    }),
)`
    display: block;
    position: absolute;
    index: ${({position: {Z}}) => Z};
    width: ${({width}) => width}px;
    height: ${({height}) => height}px;
    ${({selected}) => selected ? `border: ${config.style.selectorBorderSize}px red solid;` : null}
`