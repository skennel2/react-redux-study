import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'
import { completeTodo, deleteTodo } from '../actions'

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

const mapDispatchToProps = function(dispatch) {
    return {
        onClickDeleteButton : bindActionCreators(deleteTodo, dispatch),
        onClickCompleteButton : bindActionCreators(completeTodo, dispatch)
    }
};
  
TodoItem = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItem;