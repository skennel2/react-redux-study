import React from 'react';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';

class TodoContainer extends React.Component {
    handleAddButtonClick(evt){
        this.props.onClickAddButton(evt);
    }

    handleDeleteButtonClick(id){
        this.props.onClickDeleteButton(id);
    }

    render(){
        return(
            <div>
                <TodoList items={this.props.items} 
                    onClickDeleteButton={this.handleDeleteButtonClick.bind(this)} />

                <TodoAddForm onClickAddButton={this.handleAddButtonClick.bind(this)}                     
                    showNoInputAlert={this.props.showNoInputAlert} />
            </div>
        );
    }
}

export default TodoContainer;