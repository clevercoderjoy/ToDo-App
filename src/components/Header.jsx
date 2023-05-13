import React from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import styled from "styled-components";
import AllToDo from './AllToDo';
import CompletedToDo from './CompletedToDo';
import PendingToDo from './PendingToDo';

function Header() {
    return (
        <>
            <StyledLink to="/">To-Do List</StyledLink>
            <StyledNav>
                <StyledNavLink to="/">All Task</StyledNavLink>
                <StyledNavLink to="/completed">Completed Task</StyledNavLink>
                <StyledNavLink to="/pending">Completed Task</StyledNavLink>
            </StyledNav>

            <Routes>
                <Route path="/" element={<AllToDo />} />
                <Route path="/completed" element={<CompletedToDo />} />
                <Route path="/pending" element={<PendingToDo />} />
            </Routes>
        </>
    )
}

export default Header

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    display: block;
    padding: 1rem;
    margin: 0 1rem;
    font-size: 2rem;
    color: #272343;
    transition: all 0.2s ease-out;
    &:hover{
        background: #bae8e8;
        color: white;
        padding: 1rem;
        border-radius: 10px;
    }
`;
export const StyledNav = styled.nav`
    background: #bae8e8;
    margin: 1rem;
    padding: 0 1rem;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #272343;
    font-size: 1rem;
    font-weight: bold;
    margin: 0 1rem;
    transition: all 0.5s ease-out;
    &.active{
        background: #ffd803;
        color: white;
        padding: 1rem;
        border-radius: 10px;
    }
`;