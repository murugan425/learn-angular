import { CounterAction } from './common/actions/count-action';
import { TodoAction } from './common/actions/todo-action';
import { TODOACTIONS, COUNTERACTIONS } from './app.action';
import { IAppState } from './app.store';


export function rootReducer(state: IAppState, action): IAppState {
    const counterAction = new CounterAction(state, action);
    const todoAction = new TodoAction(state, action);
    switch (action.type) {
        case TODOACTIONS.ADD_TODO: return todoAction.addTodo();
        case TODOACTIONS.TOGGLE_TODO: return todoAction.toggleTodo();
        case TODOACTIONS.REMOVE_TODO: return todoAction.removeTodo();
        case TODOACTIONS.REMOVE_ALL_TODOS: return todoAction.clearTodos();
        case COUNTERACTIONS.INCREMENT: return counterAction.increment();
        case COUNTERACTIONS.DECREMENT: return counterAction.decrement();
    }
    return state;
};
