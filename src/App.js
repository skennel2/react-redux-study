import React from 'react';
import TodoContainer from './components/TodoContainer'
import Store from './reducers/main'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
    componentDidMount(){
    }

    render(){
        return (
            <div className="container-fluid">
                <TodoContainer store={Store} items={this.props.store.items} 
                    showNoInputAlert = {this.props.store.showNoInputAlert} />
            </div>
        );
    }   
}

export default App;
