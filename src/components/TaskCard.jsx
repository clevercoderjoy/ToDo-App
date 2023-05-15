import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { StyledH2 } from './AllToDo';
import { TaskContext } from '../contexts/TaskContext';

function TaskCard() {
    const { taskId } = useParams();
    const { allToDo } = useContext(TaskContext);
    const { toggleTask } = useContext(TaskContext);
    const task = allToDo.filter((item) => item.id === Number(taskId));
    return (
        <>
            <StyledH2>Task Details</StyledH2>
            <StyledDiv>
                <StyledTitle>Task: {task[0]?.title}</StyledTitle>
                <StyledDescription>Description: {task[0]?.description}</StyledDescription>
                <StyledStatusContainer>
                    <StyledStatus>Status: </StyledStatus><StyledStatusValue> {task[0]?.isCompleted ? "Done" : "Pending"}</StyledStatusValue>
                </StyledStatusContainer>
                <StyledBtnDone onClick={() => toggleTask(task[0])}>{!task[0]?.isCompleted ? "Mark as Done" : "Mark as Pending"}</StyledBtnDone>
                <StyledLinkContainer>
                    <StyledLink to="/">All</StyledLink>
                    <StyledLink to="/pending">Pending</StyledLink>
                    <StyledLink to="/completed">Completed</StyledLink>
                </StyledLinkContainer>
            </StyledDiv>
        </>
    )
}

export default TaskCard

const StyledStatusValue = styled.div`
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background: #ffd803;
    border-radius: 5px;
    transition: all 0.3s ease-out;
`;
const StyledDiv = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 5px solid #ffd803;
    border-radius: 10px;
    width: 300px;
    height: 250px;
    transition: all 0.3s ease-out;
    background: #bae8e8;
    &:hover{
        color: white;
        border: 5px solid #272343;
        background: #ffd803;
        ${StyledStatusValue}{
            background: #bae8e8;
            color: #272343;
        }
    }
`;
const StyledTitle = styled.div`
    padding: 0.5rem;
`;
const StyledDescription = styled.div`
    padding: 0.5rem;
`;
const StyledStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledStatus = styled.div`
    padding: 0.5rem;
`;
const StyledBtnDone = styled.button`
    border: none;
    border-radius: 5px;
    font-weight: bold;
    height: 40px;
    cursor: pointer;
    margin: 0.5rem;
    text-align: center;
    padding: 0.5rem;
    background: white;
    transition: all 0.3s ease-out;
    color: #272343;
    &:hover{
        background: #272343;
        color: white;
    }
`;
const StyledLinkContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    width: 100px;
    height: 25px;
    cursor: pointer;
    margin: 0.2rem;
    text-align: center;
    padding: 0.5rem;
    color: #272343;
    background: white;
    transition: all 0.3s ease-out;
    &:hover{
        background: #272343;
        color: white;
    }
`;