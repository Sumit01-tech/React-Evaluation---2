import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import { TaskProvider } from './Context/TaskContext'
import Login from './pages/Login'
import { AuthContext } from './Context/AuthContext'


function App() {


  return (
    <BrowserRouter>
      <Provider store={store}>
        <TaskProvider>
          <Routes>
            <Route path='/login' element={!user ? <Login /> : <Navigate to="/inbox" />} />
            {user ? (
              <Route element={<Layout />}>
                <Route path='/inbox' element={<Inbox />} />
                <Route path='/task/:id' element={<TaskDetail />} />
                <Route path='settings' element={<Settings />} />
                <Route path='*' element={<Navigate to="/inbox" />} />
              </Route>
            ) : (
              <Route path='*' element={<Navigate to="/login" />} />
            )}
          </Routes>
        </TaskProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App
