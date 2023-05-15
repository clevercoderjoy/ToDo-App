import React, { useContext } from 'react'
import styled from 'styled-components';

import { TaskContext } from '../contexts/TaskContext';

function AllToDo() {
    const { allToDo } = useContext(TaskContext);
    const { loading } = useContext(TaskContext);
    const { error } = useContext(TaskContext);
    return (
        <>
            {error.length !== 0 ? <StyledH2>{error}</StyledH2> : <StyledH2>{loading && "Loading..." ? "Loading..." : "Task Summary"}</StyledH2>}
            <StyledUl>
                {
                    allToDo.map((item) => {
                        const { id, title, description, isCompleted } = item;
                        return (
                            <StyledLi key={id}>
                                <StyledTask>Task: {title}</StyledTask>
                                <StyledStatusContainer>
                                    <StyledStatus>Status: </StyledStatus><StyledStatusValue> {isCompleted ? "Done" : "Pending"}</StyledStatusValue>
                                </StyledStatusContainer>
                                <StyledButtonContainer>
                                    <StyledBtnDone>Mark as Done</StyledBtnDone>
                                    <StyledBtnMore>See More</StyledBtnMore>
                                </StyledButtonContainer>
                            </StyledLi>
                        )
                    })
                }
            </StyledUl>
        </>
    )
}

export default AllToDo

export const StyledH2 = styled.h2`
    text-align: center;
    color: #2d334a;
    transition: all 0.2s ease-out;
    padding: 1rem;
    margin: 0 1rem;
    &:hover{
        background: #bae8e8;
        color: white;
        padding: 1rem;
        border-radius: 5px;
    }
`;
export const StyledUl = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0.5rem;
    margin: 1rem;
    color: #272343;
`;
export const StyledLi = styled.li`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    border: 5px solid #ffd803;
    border-radius: 10px;
    width: 240px;
    height: 150px;
    transition: all 0.3s ease-out;
    background: #bae8e8;
    &:hover{
        color: white;
        border: 5px solid #272343;
        background: #ffd803;
    }
`;
export const StyledTask = styled.div`
    padding: 0.1rem;
    margin: 0.1rem 0;
`;
export const StyledStatusContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
`;
export const StyledStatus = styled.div`
    padding: 0.1rem;
    margin: 0.1rem;
    font-size: 1.1rem;
`;
export const StyledStatusValue = styled.div`
    padding: 0.5rem;
    margin: 0.1rem;
    font-size: 1.1rem;
`;
export const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -0.5rem;
`;
export const StyledBtnMore = styled.button`
    border: none;
    border-radius: 5px;
    font-weight: bold;
    width: 110px;
    height: 40px;
    cursor: pointer;
    text-align: center;
    padding: 0.5rem;
    background: white;
    transition: all 0.3s ease-out;
    &:hover{
        background: #272343;
        color: white;
    }
`;
export const StyledBtnDone = styled(StyledBtnMore)``;