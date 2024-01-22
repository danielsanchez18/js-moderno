import { Todo } from '../todos/models/todo.model'

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo( 'Piedra del alma' ),
        new Todo( 'Piedra del infinito' ),
        new Todo( 'Piedra del tiempo' ),
        new Todo( 'Piedra del realidad' ),
        new Todo( 'Piedra del poder' ),
    ],
    filter: Filters.All
}

const initStore = () => {
    console.log( state );
    console.log( 'InitStore 🍊' );
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodo = ( filter = Filters.All ) => {
    switch ( filter ) {    
        case Filters.All :
            return [...state.todos];

        case Filters.Completed :
            return state.todos.filter(todo => todo.done); // todo.done === true

        case Filters.Pending :
            return state.todos.filter(todo => !todo.done); // !todo.done === false
    
        default :
            throw new Error(`Option ${ filter } is not valid.`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );
}

/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    })
}

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId ); 
    // Regresa los 'todos' cuyo id no coincidan con el enviado, es decir lo excluye del nuevo arreglo
}

const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done ); 
    // Regresa los 'todos' que no están completados
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    getTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}
