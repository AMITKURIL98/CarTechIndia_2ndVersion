import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './ui/AppLayout'

function App() {

  return (
    <>
      <Routes>
         <Route element={<AppLayout />}>
         
         </Route>
      </Routes>
    </>
  )
}

export default App
