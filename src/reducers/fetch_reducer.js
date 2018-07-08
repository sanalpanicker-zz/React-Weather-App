import CONST from '../utilities/constants'

export const cityDetail = (state = [], action) => {
    switch (action.type) {
        case CONST.FETCH_WEATHER:
            return state.concat([action.payload.data]);
        default:
            return state
    }
}