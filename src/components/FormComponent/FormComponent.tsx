import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {IForm} from "../../models/IForm";
import {joiResolver} from "@hookform/resolvers/joi";
import {newTodo} from "../../services/api.services";
import todoValidator from "../../validators/todoValidator";
import {ITodo} from "../../models/ITodo";

const FormComponent = () => {
    const [createTodo, setCreateTodo] = useState<ITodo | null>(null)
    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IForm>({
        mode: "all",
        resolver: joiResolver(todoValidator)
    })

    let formTodoCreator = async (data: IForm) => {
        try {
        const response = await newTodo(data);
        setCreateTodo(response)
        console.log("new todo created:", response);
        }catch (error){
            console.log("Failed:", error);
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(formTodoCreator)}>
                <div>
                    {errors.userId && <div>userId error: {errors.userId?.message}</div>}
                    {errors.todo && <div>todo error: {errors.todo?.message}</div>}
                    {errors.completed && <div>status error: {errors.completed?.message}</div>}

                    <label htmlFor="userId">Fill with user ID</label>
                    <input type="number" id="userId" {...register("userId")}/>
                    <label htmlFor="todo">Fill with what you have to do</label>
                    <input type="text" id="todo" {...register("todo")}/>
                    <label htmlFor="status">Status of action</label>
                    <input type="text" id="status" {...register("completed")}/>
                    <button disabled={!isValid}>Add a new ToDo</button>

        </div>
            </form>


                {createTodo && (
                    <div>
                        <h3>New todo created</h3>
                        <h5>todo ID {createTodo.id}</h5>
                        <h6>Todo: {createTodo.todo}</h6>
                        <h5>user ID {createTodo.userId}</h5>
                        <h6>Status: {createTodo.completed ? "done" : "still not done"}</h6>
                    </div>
                )}


</div>
)
    ;
};

export default FormComponent;