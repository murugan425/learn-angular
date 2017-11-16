import { tassign } from 'tassign';

export class TodoAction {
    constructor(private state, private action) { }

    addTodo() {
        const lasttodoitem = this.state.todos[this.state.todos.length - 1];
        this.action.todo.id = this.state.todos.length === 0 ? 1 : lasttodoitem.id + 1;
        // Old this.state should be updated and the New this.state should be returned
        // Merge the current this.state with the new this.state and retun it.
        return tassign(this.state, {
            todos: this.state.todos.concat(Object.assign({}, this.action.todo)),
            lastUpdate: new Date()
        });
    }

    toggleTodo() {
        const todo = this.state.todos.find(item => item.id === this.action.id);
        const index = this.state.todos.indexOf(todo);
        return tassign(this.state, {
            todos: [
                ...this.state.todos.slice(0, index),
                Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                ...this.state.todos.slice(index + 1)
            ],
            lastUpdate: new Date()
        });
    }

    removeTodo() {
        // Filter the single todo item which is removed by the user
        return tassign(this.state, {
            todos: this.state.todos.filter(item => item.id !== this.action.id),
            lastUpdate: new Date()
        });
    }

    clearTodos() {
        return tassign(this.state, {todos: [], lastUpdate: new Date()});
    }
}
