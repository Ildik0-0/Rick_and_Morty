import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk' //midleware nos ayuda a la comunicación entre el clinte y el servidor, es una fi¿uncion que se encuentra entre el clioente y el servidor

import reducer from './reducer'

//etsa line es solo para conentar con el navegador la add de la estension de devtools del navegador 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //esta linea es para que se pueda hacer peticiones a una Api/servidor
    
)


export default store