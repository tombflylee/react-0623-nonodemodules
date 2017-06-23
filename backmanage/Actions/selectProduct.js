import { createAction } from 'redux-actions';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
let selectProduct = createAction(SELECT_PRODUCT);
export { selectProduct };
