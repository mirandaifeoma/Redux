import {inc,dec,reset} from '../actions/countActions'

const initialState = { 
    count : 30,
    posts : [
        {
            id: 1,
            title:'rice',
            desc: 'rice with meat'
        },
        {
            id: 2,
            title:'beans',
            desc: 'beans with dodo'
        },
        {
            id: 3,
            title:'pizza',
            desc: 'pizza is cool'
        },
    ]
}

export const countReducer = (state = initialState,action) => { 
     switch(action.type) { 
        case inc : 
            console.log('increment is reached');
             return { 
                ...state,
              count : state.count +1
            }
         break;
        case dec : 
        console.log('decrement is reached');
            return {
                ...state, 
               count: state.count -1
              }
         break;
        case reset:
             console.log('reset is reached');
              return initialState
         break;
         default: 
               return state

     }
}