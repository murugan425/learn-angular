import { tassign } from 'tassign';

export class CounterAction {
    constructor(private state, private action) { }

    increment() {
        // Able to add a new key/property value in the store which is not declared in the store at all.
        // This conflicts with the Redux Framework design.
        // Store object should be immutable and typesafe.
        // return Object.assign({}, state, {count: state.count + 1, newKey: 'New value in store'});

        // So, instead of using Object.assign lets use tassign, it takes only 2 arguments not 3
        // return Object.assign({}, state, {count: state.count + 1});
        // Will show compilation error if you try to add any new property
        return tassign(this.state, {count: this.state.count + 1});
    }

    decrement() {
        return tassign(this.state, {count: this.state.count - 1});
    }
}
