import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <StyledH3>Built by <StyledLink>clevercoderjoy {"{...}"}</StyledLink></StyledH3>
        </>
    )
}

export default Footer

export const StyledH3 = styled.h3`
    color: #272343;
    text-align: center;
    padding: 0.5rem;
    transition: all 0.5s ease-out;
    background: #bae8e8;
    border-radius: 5px;
    margin: 1rem;
    &:hover{
        background: #ffd803;
        color: #272343;
        padding: 0.5rem;
        border-radius: 5px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    transition: all 0.3s ease-out;
    padding: 0.5rem;
    &:hover{
        background: #e3f6f5;
        color: #272343;
        padding: 0.5rem;
        border-radius: 5px;
    }
`;