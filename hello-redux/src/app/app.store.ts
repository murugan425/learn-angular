import { IAppState } from './app.store';
import { ITodo } from './todo';

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
