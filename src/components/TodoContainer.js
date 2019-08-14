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

    handleCompleteButtonClick(id){
        this.props.onClickCompleteButton(id);
    }

    render(){
        return(
            <div className='row'>
                <div className='col-md-6'>
                    <h2>할일목록</h2>
                    <TodoList items={this.props.items.filter(item => !item.isComplete)} 
                        onClickDeleteButton={this.handleDeleteButtonClick.bind(this)} 
                        onClickCompleteButton={this.handleCompleteButtonClick.bind(this)}/>

                    <TodoAddForm onClickAddButton={this.handleAddButtonClick.bind(this)}                     
                        showNoInputAlert={this.props.showNoInputAlert} />
                </div>
                <div className='col-md-6'>
                    <h2>완료목록</h2>
                    <TodoList items={this.props.items.filter(item => item.isComplete)} 
                        onClickDeleteButton={this.handleDeleteButtonClick.bind(this)} />
                </div>                
            </div>
        );
    }
}

export default TodoContainer;