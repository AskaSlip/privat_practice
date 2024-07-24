import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";
import TodosComponent from "../components/TodosComponent/TodosComponent";
import {ITodo} from "../models/ITodo";
import {allTodos, allTodosWithSkip} from "../services/api.services";
import PaginationComponent from "../components/PaginationComponent/PaginationComponent";

const TodosPage = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
 let [searchParams] = useSearchParams()
let page = searchParams.get('page')

    useEffect(() => {
        let skip;
        if (page) {
            skip = +page*30-30;
            allTodosWithSkip(skip).then(value => setTodos(value))

        }else {
            allTodos().then(value => setTodos(value))
        }
        }, [page]);



    return (
        <div>
            <Outlet/>

            <TodosComponent todos={todos}/>
            <PaginationComponent/>
        </div>
    );
};

export default TodosPage;