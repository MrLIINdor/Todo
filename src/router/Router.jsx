import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import CreateTodo from '../pages/CreateTodo/createTodo';
import TodoList from '../pages/TodoList/todoList';


export default function Router() {

  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<CreateTodo/>} />
          <Route path='/TodoList' element={<TodoList/>} />
        </Routes>
    </BrowserRouter>
  )
}
