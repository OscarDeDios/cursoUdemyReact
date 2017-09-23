import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // nnca se modifica directamente el state, siempre hay que devolver un nuevo objeto construido con el state previo
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state];
    }
    return state;
}