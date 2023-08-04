/** @odoo-module */

import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils";

import { Component, useState } from "@odoo/owl";

export class TodoList extends Component {
    setup() {
        this.id = 1;
        this.todoList = useState([]); 
        useAutofocus("inputVal");
    }

    addTodo(input) {
        if (input.keyCode === 13 && input.target.value != '') {
            this.todoList.push({id:this.id++, description:input.target.value, done:false});
            input.target.value = "";
        }
    }

    toggleTodo(todoId) {
       const todo = this.todoList.find((todo) => todo.id === todoId);
       if (todo) {
           todo.done = !todo.done;
       }
   }

   removeTodo(todoId) {
        const todoIndex = this.todoList.findIndex((todo) => todo.id === todoId);
        if (todoIndex >= 0) {
            this.todoList.splice(todoIndex, 1);
        }
    }
}

TodoList.components = { Todo };
TodoList.template = "owl_playground.TodoList";