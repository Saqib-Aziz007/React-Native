const Delete = (todos, deleteTodoId) => {
  console.log(deleteTodoId);
  return {todos: todos.filter(todo => todo.id !== deleteTodoId)};
};
const Post = (todos, todo) => {
  todos.push(todo);
  return {todos: todos, isLoading: false};
};
const Update = (todos, todo) => {
  const updateIndex = todos.findIndex(item => item.id === todo.id);
  if (updateIndex >= 0) {
    todos[updateIndex] = todo;
  }
  return {
    todos: todos,
    idLoading: false,
  };
};

export {Delete, Post, Update};
