import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProtectedRoute } from './components/login/ProtectedRoute'
import { Todo } from './pages/Todo'

const App = () => {
    return (
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route element={<ProtectedRoute />} >
                <Route path='/tareas' element={ <Todo/> } />
                <Route path='*' element={ <Todo/> } />
            </Route>
        </Routes>
    )
}

export { App }