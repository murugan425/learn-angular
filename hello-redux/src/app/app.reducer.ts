import { TODOACTIONS, COUNTERACTIONS } from './app.action';
import { IAppState } from './app.store';
import { tassign } from 'tassign';

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case TODOACTIONS.ADD_TODO:
            const lasttodoitem = state.todos[state.todos.length - 1];
            action.todo.id = state.todos.length === 0 ? 1 : lasttodoitem.id + 1;
            // Old State should be updated and the New State should be returned
            // Merge the current state with the new state and retun it.
            return tassign(state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case TODOACTIONS.TOGGLE_TODO:
            const todo = state.todos.find(item => item.id === action.id);
            const index = state.todos.indexOf(todo);
            return tassign(state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });
        case TODOACTIONS.REMOVE_TODO:
            // Filter the single todo item which is removed by the user
            return tassign(state, {
                todos: state.todos.filter(item => item.id !== action.id),
                lastUpdate: new Date()
            });
        case TODOACTIONS.REMOVE_ALL_TODOS:
            return tassign(state, {todos: [], lastUpdate: new Date()});
        case COUNTERACTIONS.INCREMENT:
            // Able to add a new key/property value in the store which is not declared in the store at all.
            // This conflicts with the Redux Framework design.
            // Store object should be immutable and typesafe.
            // return Object.assign({}, state, {count: state.count + 1, newKey: 'New value in store'});

            // So, instead of using Object.assign lets use tassign, it takes only 2 arguments not 3
            // return Object.assign({}, state, {count: state.count + 1});
            // Will show compilation error if you try to add any new property
            return tassign(state, {count: state.count + 1});
        case COUNTERACTIONS.DECREMENT:
            return tassign(state, {count: state.count - 1});
    }
    return state;
}
