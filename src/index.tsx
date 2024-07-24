import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorLayout from "./Layouts/ErrorLayout";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import TodoPage from "./pages/TodoPage";
import RandomTodosPage from "./pages/RandomTodosPage";
import CreateTodoPage from "./pages/CreateTodoPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


let router = createBrowserRouter([
    {path: '/',
        errorElement: <ErrorLayout/>,
        element: <MainLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'todos', element: <TodosPage/>,
                children:[
                    {path: ':id', element: <TodoPage/>}
                ]},
            {path: 'random', element: <RandomTodosPage/>},
            {path: 'add', element: <CreateTodoPage/>}
        ]




    }
])

root.render(
    <RouterProvider router={router}/>
)