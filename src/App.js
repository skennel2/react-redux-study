import React from 'react';
import TodoContainer from './components/TodoContainer'

class App extends React.Component {
    state = {
        items : [
            {
                id : 1,
                todo : 'go shopping',
                state : 'todo'
            }
        ],
        showNoInputAlert : false
    };

    handleAddButtonClick(evt){
        if(evt.inputValue.trim().length === 0){
            this.setState({
                showNoInputAlert : true
            });

            return;
        }

        const newItems = this.state.items.concat({
            id : this.state.items.length + 1,
            todo : evt.inputValue,
            state : 'todo'
        });

        this.setState({
            items : newItems,
            showNoInputAlert : false
        });
    }

    handleDeleteButtonClick(id){
        const newItems = this.state.items.filter(item => item.id !== id);

        this.setState({
            items : newItems
        });
    }

    render(){
        return (
            <div className="App">
                <TodoContainer items={this.state.items} 
                    showNoInputAlert = {this.state.showNoInputAlert}
                    onClickAddButton={this.handleAddButtonClick.bind(this)}
                    onClickDeleteButton={this.handleDeleteButtonClick.bind(this)}/>
            </div>
        );
    }   
}

export default App;
