import * as types from '../../redux/commonConstant'

// 'b_02.png','b_03.png'
export default function(state = {loading: false,data:1,detaildata:[],detailPrice:0,detailBigimg:[]},action){
    let detailState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case types.PLUS:
            detailState.data += 1;
            break;
        case types.MINUS:
            detailState.data -= 1;
            break;

        case types.DETAIL_REQUEST:
            detailState.loading = true
            detailState.status = false;
            break;
        case types.DETAIL_SUCCESS:
            console.log(action.body);
            if (action.body.data){
                detailState.detaildata = action.body.data;
                detailState.detailPrice = action.body.data[0].price;
                detailState.detailBigimg = action.body.data[0].small_img
            }
            detailState.status = true;
            detailState.lastFetched = action.lastFetched
            detailState.loading = false
            break;

        case types.DETAIL_FAILURE:
            detailState.error = action.error
            detailState.loading = false
            break;

        default:
            detailState.data = 1;
    }
    return detailState;
}