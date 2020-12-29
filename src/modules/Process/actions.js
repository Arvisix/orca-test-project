export const DELETE_PROCESS_BUTTON_CLICKED = 'DELETE_PROCESS_BUTTON_CLICKED';
export const PROCESSES_PAGE_LOADED = 'PROCESSES_PAGE_LOADED';
export const ADD_NEW_PROCESS = 'ADD_NEW_PROCESS';
export const ADD_NEW_PROCESS_BUTTON_CLICKED = 'ADD_NEW_PROCESS_BUTTON_CLICKED';
export const SET_PROCESSES = 'SET_PROCESSES';

export const deleteProcessButtonClicked = id => ({
    type: DELETE_PROCESS_BUTTON_CLICKED,
    payload: id,
});

export const processesPageLoaded = () => ({
    type: PROCESSES_PAGE_LOADED,
});

export const addNewProcessButtonClicked = () => ({
    type: ADD_NEW_PROCESS_BUTTON_CLICKED,
});