import React from 'react';

class TodoItem extends React.Component {
    handleDeleteButtonClick(){
        this.props.onClickDeleteButton(this.props.item.id);
    }

    render() {
        return (
            <div>
                <span>{this.props.item.todo}</span>
                <span><button onClick={this.handleDeleteButtonClick.bind(this)}>삭제</button></span>
            </div>
        );
    }
}

export default TodoItem;