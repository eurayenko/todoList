import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import todosData from './redux/todosData';

class App extends Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		}
		this.handlerChange = this.handlerChange.bind(this);
	};

	handlerChange(id) {
		this.setState(prevState => {
			const updateState = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed
				}
				return todo;
			})
			return {todos: updateState};
		})
	}

	render() {
		const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handlerChange={this.handlerChange}/>)
		return (
			<div className="wrapper">
				{todoItems}
			</div>
		);
	};
}

export default App;
