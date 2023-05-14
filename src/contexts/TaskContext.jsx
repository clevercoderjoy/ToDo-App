import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react';
import { fakeFetch } from '../api/fakeFetch';

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {
    const initialState = {
        loading: true,
        error: "",
        allToDo: [],
        pendingToDo: [],
        completedToDo: [],
    };
    const ACTION = {
        LOADING: "loading",
        ERROR: "error",
        ALL_TO_DO: "allToDo",
        PENDING_TODO: "pendingToDo",
        COMPLETED_TODO: "completedToDo",
    }
    const reducer = (state, action) => {
        switch (action.type)
        {
            case "loading":
                return { ...state, loading: false };
            case "error":
                return { ...state, error: action.payload };
            case "allToDo":
                return { ...state, allToDo: action.payload };
            default:
                state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const getTasks = async () => {
        try
        {
            const response = await fakeFetch("https://example.com/api/todos");
            const { status, data } = response;
            if (status === 200)
            {
                dispatch({ type: ACTION.LOADING });
                const receivedData = data.todos;
                dispatch({ type: ACTION.ALL_TO_DO, payload: receivedData });
            }
        }
        catch (e)
        {
            dispatch({ type: "error", payload: "404 Data Not Found!" })
        }
    }

    useEffect(() => { getTasks() }, []);
    return (
        <TaskContext.Provider value={{ error: state.error, loading: state.loading, allToDo: state.allToDo, pendingToDo: state.pendingToDo, completedToDo: state.completedToDo }}>
            {children}
        </TaskContext.Provider>
    )
}