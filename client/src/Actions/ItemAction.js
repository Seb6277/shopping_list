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

<<<<<<< HEAD
export function removeStoredItem(itemID) {
=======
export function removeItem(itemID) {
>>>>>>> 575a41da6ccc6cde8c1bba9f618b1c57ca75380e
    return {type: REMOVE_ITEM, value: itemID}
}