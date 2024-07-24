import axios from "axios";
import {urls} from "../constants/urls";
import {ITodo} from "../models/ITodo";
import {IForm} from "../models/IForm";

const axiosInstance = axios.create({
    baseURL: urls.baseUrl,
    headers: { 'Content-Type': 'application/json' }
})

const allTodos = async ():Promise<ITodo[]> => {
    return await axiosInstance.get(urls.baseUrl).then(value => value.data.todos)
}

const allTodosWithSkip = async (skip: number): Promise<ITodo[]> => {
    return await axiosInstance.get(urls.skipUrl + skip).then(value => value.data.todos)
}

const todoById = async (id:number): Promise<ITodo> => {
    return await axiosInstance.get(urls.baseUrl + '/' + id).then(value => value.data.todos)
}

const randomTodos = async (quantity: number): Promise<ITodo[]> => {
    return await axiosInstance.get(urls.random + '/' + quantity).then(value => value.data.todos)
}

const newTodo = async (data:IForm): Promise<ITodo> => {
    const response = await axiosInstance.post<ITodo>(urls.createNew,{
        userId: data.userId,
        todo: data.todo,
        completed: data.completed
    } )
    return response.data
}

export {allTodos, randomTodos, allTodosWithSkip, todoById, newTodo}