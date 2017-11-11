import { IAppState } from './app.store';
export interface IAppState {
    count: number;
};

export const INITIAL_APPSTATE: IAppState = {
     count: 0
}
