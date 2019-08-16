import { combineReducers } from 'redux';

const initialState = {
    items : [
        {
            id : 1,
            todo : 'go shopping',
            isComplete : false
        }
    ],
    showNoInputAlert : false,
    isLoading : false
}

const reducer = function(state=initialState, action){
    if(action.type === 'ADD_TODO'){
        if(action.payload.inputValue.trim().length === 0){
            return {
                ...state,
                showNoInputAlert : true
            }
        } 
        const newItems = state.items.concat({
            id : state.items.length + 1,
            todo : action.payload.inputValue,
            isComplete : false
        });

        return {
            ...state,
            showNoInputAlert : false,
            items : newItems
        };
    }else if(action.type === 'DELETE_TODO'){
        const newItems = state.items.filter(item => item.id !== action.payload);

        return {
            ...state,
            items : newItems
        };
    }else if(action.type === 'COMPLETE_TODO'){
        const newItems = state.items.map(item => item.id === action.payload ? {
            ...item,
            isComplete : true
        } : item);

        return {
            ...state,
            items : newItems
        };
    }else if(action.type === 'FETCH_TODO_LIST'){
        return {
            ...state,
            items : action.payload
        }
    }else if(action.type === 'START_LOADING'){
        return {
            ...state,
            isLoading : true
        }
    }else if(action.type === 'FINISH_LOADING'){
        return {
            ...state,
            isLoading : false
        }
    }else{
        return state;
    }
}

const reducers = combineReducers({
    reducer
}); 

export default reducers;