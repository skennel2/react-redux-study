import React from 'react';
import TodoList from './TodoList';
import TodoAddForm from './TodoAddForm';

class TodoContainer extends React.Component {

    render(){
        return(
            <div className='row'>
                <div className='col-md-6'>
                    <h2>할일목록</h2>
                    <TodoList items={this.props.items.filter(item => !item.isComplete)} />

                    <TodoAddForm showNoInputAlert={this.props.showNoInputAlert} />
                </div>
                <div className='col-md-6'>
                    <h2>완료목록</h2>
                    <TodoList items={this.props.items.filter(item => item.isComplete)} />
                </div>                
            </div>
        );
    }
}

export default TodoContainer;