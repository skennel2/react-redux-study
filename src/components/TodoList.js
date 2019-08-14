import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {    

    renderTodoItem(item) {
        return (
            <TodoItem key={item.id} item={item} />
        );
    }

    render() {
        return (
            <div className='list-group'>
                {this.props.items.map(item => this.renderTodoItem(item))}
            </div>
        );
    }
}

export default TodoList;
