import uniqid from 'uniqid';

export default (state = {maxZ: 2, items: {}}, action) => {
    if (action.type === "ADD_ITEM") {
        const {filename, url, position} = action;
        const id = uniqid();
        const maxZ = state.maxZ + 1;
        const items = {...state.items};
        items[id] = {
            id,
            filename,
            url,
            position: {
                ...position,
                Z: maxZ,
            },
            width: 400,
        };
        return {
            maxZ,
            items,
        };
    };
    return state;
};

