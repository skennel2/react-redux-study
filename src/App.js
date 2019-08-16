import React from 'react';
import TodoContainer from './components/TodoContainer'
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux'
import { fecthTodoList } from './actions'

class App extends React.Component {
    componentDidMount(){
        this.props.fecthTodoList([
            {
                id : 1,
                todo : 'go party',
                isComplete : false
            }
        ]);
    }

    render(){
        return (
            <div className="container-fluid">
                <TodoContainer items={this.props.items} 
                    showNoInputAlert = {this.props.showNoInputAlert} />
            </div>
        );
    }   
}

const mapStateToProps = function(state){
    return { 
        items : state.reducer.items,
        showNoInputAlert : state.reducer.showNoInputAlert,      
    };
};

const mapDispatchToProps = function(dispatch) {
    return {
        fecthTodoList : bindActionCreators(fecthTodoList, dispatch)
    }
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
