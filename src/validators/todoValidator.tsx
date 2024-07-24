import React from 'react';
import Joi from "joi";

const TodoValidator =
    Joi.object({

        userId: Joi.number()
            .min(1)
            .max(208)
            .required()
            .messages({
                "number.min": "min 1",
                "number.max": "max is 208"
            }),

        todo: Joi.string()
            .pattern(/^.{5,}$/)
            .required()
            .messages({
                "string.empty": "cannot be empty",
                "string.pattern.base": "min 5 characters"
            }),

        completed: Joi.boolean()
            .required()


    })

export default TodoValidator;