export function all_item_reducers(state={items:[]},action) {

    switch (action.type){

        case "get_all_items":
            return {items:[...state.items,...action.payload]};
            //return Object.assign({},state,{items:action.payload});

        default:
            return state;

    }

}