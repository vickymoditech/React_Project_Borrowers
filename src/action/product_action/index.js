import products from '../../component/Data/index';
var axios = require('axios');

export function get_all_items_action() {

    return {
        type:"get_all_items",
        payload:products
    }

}

