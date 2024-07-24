import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useAppLocation} from "../hooks/useAppLocation";
import {ITodo} from "../models/ITodo";
import {allTodos, allTodosWithSkip, todoById} from "../services/api.services";
import TodoComponent from "../components/TodoComponent/TodoComponent";

const TodoPage = () => {

    let {id} = useParams()
    let location = useAppLocation<ITodo>()
    let state = location.state
   

    const [todo, setTodo] = useState<any>()


    useEffect(() => {
        todoById(state.id).then(value => setTodo(value))
    }, [state.id]);


    return (
        <div>
            <h4>whole info:</h4>
            <li>{state.id}</li>
            <li>{state.userId}</li>
            <li>{state.todo}</li>
            <li>{state.completed + '' }</li>

        </div>
    );
};

export default TodoPage;