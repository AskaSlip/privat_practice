import React, {FC} from 'react';
import {ITodo} from "../../models/ITodo";
import TodoComponent from "../TodoComponent/TodoComponent";

interface IProps {
    todos: ITodo[]
}

const TodosComponent:FC<IProps> = ({todos}) => {



    return (
        <div>
            {todos.map(todo => (
                <TodoComponent
                    key={todo.id}
                    todo={todo}/>
            ))}
        </div>
    );
};

export default TodosComponent;