import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'
import { addTodo } from '../actions'

class TodoAddForm extends React.Component {
    handleAddButtonClick(evt) {
        if(this.textInput.value.trim().length === 0){
            this.textInput.focus();
        }

        this.props.onClickAddButton({
            inputValue: this.textInput.value
        });

        this.textInput.value = '';
    }

    componentDidMount() {
        this.textInput.focus();
    }

    render() {
        const plzInputDataDOM = (<div>내용을 입력해주세요</div>);

        return (
            <div>
                <input className='form-control' type="text" ref={(input) => { this.textInput = input; }} />

                <button className='btn btn-md btn-default' onClick={this.handleAddButtonClick.bind(this)}>등록</button>

                {this.props.showNoInputAlert ? plzInputDataDOM : null}
            </div>
        );
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        onClickAddButton : bindActionCreators(addTodo, dispatch)
    }
};
  
TodoAddForm = connect(null, mapDispatchToProps)(TodoAddForm);

export default TodoAddForm;
