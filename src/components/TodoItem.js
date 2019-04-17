import React from 'react';
import clasess from './TodoItem.module.css';

function TodoItem(props) {
	return(
		<div className={clasess.wrapper}>
			<input 
				className={clasess.input} 
				type="checkbox" 
				checked={props.item.completed} 
				onChange={() => props.handlerChange(props.item.id)}
			/>
      		<p className={props.item.completed ? clasess.done : undefined}>{props.item.text}</p>
		</div>
	);
}

export default TodoItem;