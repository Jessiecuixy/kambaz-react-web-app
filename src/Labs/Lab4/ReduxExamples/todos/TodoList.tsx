// import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  // const [todos, setTodos] = useState([
  //   { id: "1", title: "Learn React" },
  //   { id: "2", title: "Learn Node"  }]);
  // const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  // const addTodo = (todo: any) => {
  //   const newTodos = [ ...todos, { ...todo,
  //     id: new Date().getTime().toString() }];
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title: ""});
  // };
  // const deleteTodo = (id: string) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };
  // const updateTodo = (todo: any) => {
  //   const newTodos = todos.map((item) =>
  //     (item.id === todo.id ? todo : item));
  //   setTodos(newTodos);
  //   setTodo({id: "-1", title: ""});
  // };
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        {/* <ListGroup.Item> 
          <Button variant="success"
                  onClick={() => addTodo(todo)}
                  id="wd-add-todo-click"> Add </Button>
          <Button variant="warning"
                  onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click"> Update </Button>
          <FormControl value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
        </ListGroup.Item>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <Button variant="danger"
                    onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click"> Delete </Button>
            <Button variant="primary"
                    onClick={() => setTodo(todo)}
                    id="wd-set-todo-click"> Edit </Button>
            {todo.title}
          </ListGroup.Item>
        ))}  */}
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
</div>);}