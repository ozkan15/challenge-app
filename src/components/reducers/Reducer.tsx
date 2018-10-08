import { ERROR } from "../actions/errorAction"
import { LOADING } from '../actions/loadingAction';
import { MOVIES_UPDATE } from "../actions/moviesAction"
import { SERIES_UPDATE } from "../actions/seriesAction"



export const defaulState = {
    message:[""],
    movies:[""],
    series:[""],
    
  }

export const Reducer: any =  (state=defaulState, action: any) =>{
    switch (action.type) {
        case MOVIES_UPDATE: return {
            message:[""],
            movies:[...state.movies,action.payload],
            series:[...state.series,""]           
        };
        case SERIES_UPDATE: return {
            message:[""],
            movies:[...state.movies,""],
            series: [...state.series,action.payload]
        };
        case ERROR: return {
            message: [...state.message,action.payload],
            movies:[...state.movies,""],
            series:[...state.series,""]    
        };
        case LOADING: return {
            message: [...state.message,action.payload],
            movies:[...state.movies,""],
            series:[...state.series,""]    
        };

        default: return state;
    }
}