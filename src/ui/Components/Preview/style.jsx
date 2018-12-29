import styled from "styled-components";

export const Container = styled.main`
    display: block;
    position: relative;
    width: 100%;
`;

export const Image = styled.img`
    display: block;
    position: absolute;
    left: ${({position: {X}}) => X}px;
    top: ${({position: {Y}}) => Y}px;
    index: ${({position: {Z}}) => Z};
    width: ${({width}) => width}px;
    height: auto;
`;