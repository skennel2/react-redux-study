import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {    
    handleDeleteButtonClick(id){
        this.props.onClickDeleteButton(id);
    }

    renderTodoItem(item) {
        return (<TodoItem key={item.id} item={item} onClickDeleteButton={this.handleDeleteButtonClick.bind(this)} />);
    }

    render() {
        return (
            <div>
                {this.props.items.map(item => this.renderTodoItem(item))}
            </div>
        );
    }
}

export default TodoList;
