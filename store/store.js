const { createStore, compose } = Redux

//* Todos
export const SET_TODOS = 'SET_TODOS'


const initialState = {
    todos: [],
}

function appReducer(state = initialState, cmd = {}) {
    switch (cmd.type) {

        //* Todos
        case SET_TODOS: 
            return {
            ...state,
            todos: cmd.todos
            }
        default:
            return state
    }

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

// * For Debugging
window.gStore = store
