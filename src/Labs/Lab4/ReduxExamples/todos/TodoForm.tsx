import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(/*{ todo, setTodo, addTodo, updateTodo }: {*/
//     todo: { id: string; title: string };
//     setTodo: (todo: { id: string; title: string }) => void;
//     addTodo: (todo: { id: string; title: string }) => void;
//     updateTodo: (todo: { id: string; title: string }) => void;
//   }
) {
    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (
        <ListGroup.Item className="d-flex align-items-center">
            <FormControl value={todo.title} className="flex-grow-1 me-2"
                onChange={ (e) =>  dispatch(setTodo({ ...todo, title: e.target.value })) }/>
            <Button variant="warning" size="sm" className="me-2"
                    onClick={() => dispatch(updateTodo(todo))}
                    id="wd-update-todo-click"> Update </Button>
            <Button variant="success" size="sm" 
                    onClick={() => dispatch(addTodo(todo))}
                    id="wd-add-todo-click"> Add </Button>

        </ListGroup.Item>
  );}
  