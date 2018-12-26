import styled from "styled-components"

import DropZone from 'ui/HOC/DropZone';

export const Main = styled.div`
    display: block;
    position: relative;
    width: 100%;
`;

const headerHeight = "3em";

export const Header = styled.header`
    display: block;
    position: relative;
    padding: 0 1em;
    line-height: ${headerHeight};
    width: 100%;
    color: #61dafb;
    background-color: #20232a;
    overflow: hidden;
`;

export const StyledDropZone = styled(DropZone)`
    display: block;
    position: relative;
    width: 100%;
    height: calc(100vh - ${headerHeight});
`