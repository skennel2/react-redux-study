import React from 'react';
import TodoContainer from './components/TodoContainer'
import { connect } from 'react-redux';

class App extends React.Component {
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

App = connect(mapStateToProps, null)(App);

export default App;
