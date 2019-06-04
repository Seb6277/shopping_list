const initialState = {
    storedItems: []
};

function listedStoreItems (state = initialState, action) {
    switch (action.type) {
        case 'GET_ITEM':
            return {storedItems: action.value}
        case 'ADD_ITEM':
            return {storedItems: [...state.storedItems, action.value]}
        case 'REMOVE_ITEM':
            const items = [...state.storedItems];
            const index = items.findIndex((item) => item._id === action.value);
            items.splice(index, 1);
            return {storedItems: items}
        default:
            return state
    }
}

export default listedStoreItems