import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import NavBar from './components/NavBar'
import { AuthProvider } from './contexts/AuthContext'
import { TaskProvider } from './contexts/TasksContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import TaskFormPage from './pages/TaskFormPage'
import TasksPage from './pages/TasksPage'

const App = () => {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <main className='container mx-auto px-10'>
            <NavBar />
            <div className='flex h-full items-center justify-center md:h-[calc(100vh-100px)]'>
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path='/tasks' element={<TasksPage />} />
                  <Route path='/add-task' element={<TaskFormPage />} />
                  <Route path='/tasks/:id' element={<TaskFormPage />} />
                  <Route path='/profile' element={<ProfilePage />} />
                  <Route path='*' element={<NotFoundPage />} />
                </Route>
              </Routes>
            </div>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
