// import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

// const initialState = {
//     myFavorites: [],
//     allCharacterFv: [],

// }

// const reducer = (state=initialState, action )=>{
//     switch(action.type){

//         case ADD_FAV:
//             return{
//                 ...state,
//                 myFavorites: [...state.allCharacterFv, action.payload],
//                 allCharacterFv:[...state.allCharacterFv, action.payload]
//             }

//         case REMOVE_FAV:
//             return{
//                 ...state,
//                 myFavorites: state.myFavorites.filter(fav => fav.id === action.payload)

//             }
            
//         case FILTER:
//             const allCharactersFiltered = state.allCharacterFv.filter(character =>
//                  character.gender === action.payload)
//             return{
//                 ...state,
//                 myFavorites:
//                     action.payload === 'allCharacters'
//                     ? [...state.allCharacterFv]
//                     : allCharactersFiltered
//             }

//         case ORDER:
//             const allCharactersFavCopy = [...state.allCharacterFv]

//             return{
//                 ...state,
//                 myFavorites:
//                     action.payload === 'A'
//                     ? allCharactersFavCopy.sort((a , b) => a.id - b.id ) 
//                     : allCharactersFavCopy.sort((a, b) =>b.id - a.id)
//             }

//         default:
//             return{
//                 ...state
//             }
//     }
// }

// export default reducer;

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload, //[...state.allCharactersFav, payload],
                allCharactersFav: payload //[...state.allCharactersFav, payload]
            }

        case REMOVE_FAV: 
            return {
                ...state,
                myFavorites: payload //state.myFavorites.filter(fav => fav.id !== payload)
            }

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}


export default reducer;