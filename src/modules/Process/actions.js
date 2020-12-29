export const PROCESS_LINK_BUTTON_CLICKED = 'PROCESS_LINK_BUTTON_CLICKED';
export const DELETE_PROCESS_BUTTON_CLICKED = 'DELETE_PROCESS_BUTTON_CLICKED';

export const processLinkButtonClicked = id => ({
    type: PROCESS_LINK_BUTTON_CLICKED,
    payload: id,
});

export const deleteProcessButtonClicked = id => ({
    type: DELETE_PROCESS_BUTTON_CLICKED,
    payload: id,
});