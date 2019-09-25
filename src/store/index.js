import { observable, action } from 'mobx';

export default class MainStore {
    @observable
    items = [
        {
            id : 1,
            todo : 'go shopping',
            isComplete : false
        }
    ];

    @observable
    showNoInputAlert = false;

    @observable
    isLoading = false;

    @action
    addTodo(inputValue){
        if(inputValue.trim().length === 0){
            this.showNoInputAlert = true
        } 
        const newItems = this.items.concat({
            id : this.items.length + 1,
            todo : inputValue,
            isComplete : false
        });

        this.items = newItems;
        this.showNoInputAlert = false;
    }

    @action
    deleteTodo(id){
        const newItems = this.items.filter(item => item.id !== id);
        this.items = newItems;
    }

    @action
    completeTodo(id){
        const newItems = this.items.map(item => item.id === id ? {
            ...item,
            isComplete : true
        } : item);

        this.items = newItems;
    }
}