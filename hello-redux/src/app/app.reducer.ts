import { combineReducers } from 'redux';
import { countReducer } from './counter/reducer';
import { taskReducer } from './todo/reducer';

// export function rootReducer(state: IAppState, action): IAppState {
//     const counterAction = new CounterAction(state, action);
//     const todoAction = new TodoAction(state, action);
//     switch (action.type) {
//         case TODOACTIONS.ADD_TODO: return todoAction.addTodo();
//         case TODOACTIONS.TOGGLE_TODO: return todoAction.toggleTodo();
//         case TODOACTIONS.REMOVE_TODO: return todoAction.removeTodo();
//         case TODOACTIONS.REMOVE_ALL_TODOS: return todoAction.clearTodos();
//         case COUNTERACTIONS.INCREMENT: return counterAction.increment();
//         case COUNTERACTIONS.DECREMENT: return counterAction.decrement();
//     }
//     return state;
// };

export const rootReducer = combineReducers({
    todoTasks: taskReducer,
    counter: countReducer
});
