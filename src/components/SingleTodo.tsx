import React from "react";
import { Todo } from "../model";
import "./styles.css";

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    return <div></div>;
};

export default SingleTodo;