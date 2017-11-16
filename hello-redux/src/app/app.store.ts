import { IAppState } from './app.store';
import { ITodo } from './todo';
import { TODOACTIONS, COUNTERACTIONS } from './app.action';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
    count: number;
}

export const INITIAL_APPSTATE: IAppState = {
     todos: [],
     lastUpdate: null,
     count: 0
};

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case TODOACTIONS.ADD_TODO:
            const lasttodoitem = state.todos[state.todos.length - 1];
            action.todo.id = state.todos.length === 0 ? 1 : lasttodoitem.id + 1;
            // Old State should be updated and the New State should be returned
            // Merge the current state with the new state and retun it.
            return Object.assign({} , state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case TODOACTIONS.TOGGLE_TODO:
            const todo = state.todos.find(item => item.id === action.id);
            const index = state.todos.indexOf(todo);
            return Object.assign({} , state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            });
        case TODOACTIONS.REMOVE_TODO:
            // Filter the single todo item which is removed by the user
            return Object.assign({}, state, {
                todos: state.todos.filter(item => item.id !== action.id),
                lastUpdate: new Date()
            });
        case TODOACTIONS.REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            });
        case COUNTERACTIONS.INCREMENT:
            return Object.assign({}, state, {count: state.count + 1});
        case COUNTERACTIONS.DECREMENT:
            return Object.assign({}, state, {count: state.count - 1});
    }
    return state;
}
