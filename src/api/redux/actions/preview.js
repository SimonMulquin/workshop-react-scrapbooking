export const ADD_ITEM = ({filename, url, position, dimensions}) => ({
    type: "ADD_ITEM",
    filename,
    url,
    position,
    dimensions,
});

export const DELETE_SELECTED_ITEM = () => ({
    type: "DELETE_SELECTED_ITEM",
})

export const SELECT_ITEM = (id) => ({
    type: "SELECT_ITEM",
    id,
})