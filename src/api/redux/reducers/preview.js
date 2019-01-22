import uniqid from 'uniqid';

export default (state = {maxZ: 2, items: {}}, action) => {
    switch(action.type){
        case "ADD_ITEM":
            const {filename, url, position, dimensions} = action;
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
                dimensions,
            };
            return {
                maxZ,
                items,
            };
        default:
            return state
    }
        
};

