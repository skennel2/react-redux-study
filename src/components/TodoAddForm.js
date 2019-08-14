import React from 'react';

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
                <input type="text" ref={(input) => { this.textInput = input; }} />

                <button onClick={this.handleAddButtonClick.bind(this)}>등록</button>

                {this.props.showNoInputAlert ? plzInputDataDOM : null}
            </div>
        );
    }
}

export default TodoAddForm;
