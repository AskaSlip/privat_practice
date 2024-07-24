import React from 'react';
import {useForm} from "react-hook-form";
import {IRandomTodo} from "../../models/IRandomTodo";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";

const RandomTodosComponent = () => {

    let {
        formState: {errors, isValid},
        register,
        handleSubmit
    } = useForm<IRandomTodo>({
        mode: "all",
        // resolver: joiResolver(RandomTodosValidator)
    })




    return (
        <div>
            <form>
                <label htmlFor="quantity">How many todos are you looking for? </label>
                <input type="number" id="quantity"{...register("quantity")}/></form>
        </div>
    );
};

export default RandomTodosComponent;