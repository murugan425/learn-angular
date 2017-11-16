import { ICountAppState, COUNTER_INITIAL_APPSTATE  } from './counter/store';
import { ITaskAppState, TASK_INITIAL_APPSTATE} from './todo/store';
import { IAppState } from './app.store';

export interface IAppState {
    todoTasks: ITaskAppState;
    counter: ICountAppState;
}

export const INITIAL_APPSTATE: IAppState = {
    todoTasks: TASK_INITIAL_APPSTATE,
    counter: COUNTER_INITIAL_APPSTATE
};
