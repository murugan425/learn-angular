import { ITodo } from './todo';

export interface ITaskAppState {
    todos: ITodo[];
    lastUpdate: Date;
}

export const TASK_INITIAL_APPSTATE: ITaskAppState = {
     todos: [],
     lastUpdate: null
};
