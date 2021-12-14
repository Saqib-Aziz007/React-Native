import {Delete, Post, Update} from './selectors';

const ApiReducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return {
        isLoading: false,
        todos: action.payload,
        error: '',
      };
    case 'error':
      return {
        isLoading: false,
        todos: [],
        error: 'something went wrong!',
      };
    case 'delete':
      return Delete(state.todos, action.todoId);
    case 'post':
      return Post(state.todos, action.todo);
    case 'update':
      return Update(state.todos, action.todo);
    case 'setTodo':
      return {
        id: action.todo.id,
        userId: action.todo.userId,
        title: action.todo.title,
        description: action.todo.description,
        completed: action.todo.completed,
      };
    default:
      return state;
  }
};

export default ApiReducer;
