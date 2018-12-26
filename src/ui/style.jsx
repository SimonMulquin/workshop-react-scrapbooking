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
    line-height: ${config.style.headerHeight};
    width: 100%;
    color: #61dafb;
    background-color: #20232a;
    overflow: hidden;
`;