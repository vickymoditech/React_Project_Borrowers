import {combineReducers} from 'redux';
import {all_item_reducers} from './product_reducers/index';


export default combineReducers({

    all_items:all_item_reducers

});