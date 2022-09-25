import '../styles/globals.css'
import '../styles/tailwind.css'

import { useState } from 'react'

import TodoForm from './todoForm/TodoForm'
import TodoList from './todoList/TodoList'

import './App.css'

function App({ Component, pageProps }) {
    const staticTodos=[
        {
            id: 1,
            todoName: todo-1,
        },
        {
            id: 2,
            todoName: todo-2,
        },
        {
            id: 3,
            todoName: todo-3,
        }
    ];
    const [todos, setTodos] = useState(staticTodos);
    return (<>
        <TodoForm />
        <TodoList />
    </>);
}

export default MyApp