import React from 'react';

class TodoItem extends React.Component {
    handleDeleteButtonClick(){
        this.props.onClickDeleteButton(this.props.item.id);
    }

    handleCompleteButtonClick(){
        this.props.onClickCompleteButton(this.props.item.id);
    }

    render() {
        const completeDOM = (
            <span className='badge badge-primary badge-pill'>
                <div onClick={this.handleCompleteButtonClick.bind(this)} role="button">완료</div>
            </span>
        );

        return (
            <div className='list-group-item d-flex justify-content-between align-items-center'>
                {this.props.item.todo}                
                {this.props.item.isComplete ? null : completeDOM }
                <span className='badge badge-danger badge-pill'>
                    <div onClick={this.handleDeleteButtonClick.bind(this)}>삭제</div>
                </span>
            </div>
        );
    }
}

export default TodoItem;