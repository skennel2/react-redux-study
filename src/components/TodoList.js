import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {    
    handleDeleteButtonClick(id){
        this.props.onClickDeleteButton(id);
    }

    handleCompleteButtonClick(id){
        this.props.onClickCompleteButton(id);
    }

    renderTodoItem(item) {
        return (
            <TodoItem key={item.id} item={item} 
                onClickDeleteButton={this.handleDeleteButtonClick.bind(this)} 
                onClickCompleteButton={this.handleCompleteButtonClick.bind(this)}/>
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
