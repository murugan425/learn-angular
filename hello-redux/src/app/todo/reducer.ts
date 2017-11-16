import { TodoAction } from './action';
import { ITaskAppState, TASK_INITIAL_APPSTATE } from './store';
import { TODOACTIONS } from '../app.action';

export function taskReducer(state: ITaskAppState = TASK_INITIAL_APPSTATE, action): ITaskAppState {
    const todoAction = new TodoAction(state, action);
    switch (action.type) {
        case TODOACTIONS.ADD_TODO: return todoAction.addTodo();
        case TODOACTIONS.TOGGLE_TODO: return todoAction.toggleTodo();
        case TODOACTIONS.REMOVE_TODO: return todoAction.removeTodo();
        case TODOACTIONS.REMOVE_ALL_TODOS: return todoAction.clearTodos();
    }
    return state;
}
