import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    todo: ITodo
}

const TodoComponent:FC <IProps> = ({todo}) => {


    return (
        <div>

            <Link to={todo.id.toString()} state={todo}>{todo.id} {todo.todo}</Link>
        </div>
    );
};

export default TodoComponent;