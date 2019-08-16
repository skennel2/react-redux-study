export function addTodo(newTodo){
    return {
        type : "ADD_TODO",
        payload : newTodo
    }   
}

export function deleteTodo(id){
    return {
        type : "DELETE_TODO",
        payload : id
    }
}

export function completeTodo(id){
    return {
        type : 'COMPLETE_TODO',
        payload : id
    }
}

export function fecthTodoList(todoList){
    return {
        type : 'FETCH_TODO_LIST',
        payload : todoList,
    }
}