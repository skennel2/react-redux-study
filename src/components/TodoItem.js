import React from 'react';

class TodoItem extends React.Component {
    handleDeleteButtonClick(){
        this.props.onClickDeleteButton(this.props.item.id);
    }

    handleCompleteButtonClick(){
        this.props.onClickCompleteButton(this.props.item.id);
    }

    render() {
        const completeDOM = (<span><button onClick={this.handleCompleteButtonClick.bind(this)}>완료</button></span>);

        return (
            <div>
                <span>{this.props.item.todo}</span>                
                {this.props.item.isComplete ? null : completeDOM }
                <span><button onClick={this.handleDeleteButtonClick.bind(this)}>삭제</button></span>
            </div>
        );
    }
}

export default TodoItem;