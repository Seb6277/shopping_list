/*
    Action Type
 */

const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

/*
    Function
 */
export function getItem(items) {
    return {type: 'GET_ITEM', value: items}
}
export function addItemToStore(item) {
    return {type: ADD_ITEM, value: item}
}

export function removeStoredItem(itemID) {
    return {type: REMOVE_ITEM, value: itemID}
}