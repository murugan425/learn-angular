import { CounterAction } from './action';
import { ICountAppState, COUNTER_INITIAL_APPSTATE } from './store';
import { COUNTERACTIONS } from '../app.action';

export function countReducer(state: ICountAppState = COUNTER_INITIAL_APPSTATE, action): ICountAppState {
    const counterAction = new CounterAction(state, action);
    switch (action.type) {
        case COUNTERACTIONS.INCREMENT: return counterAction.increment();
        case COUNTERACTIONS.DECREMENT: return counterAction.decrement();
    }
    return state;
}
