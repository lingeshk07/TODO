import Login from './components/Login'
import Welcome from './components/Welcome'
import Header from './components/Header'
import Logout from './components/Logout'
import Footer from './components/Footer'
import Todo from './components/Todo'
import Error from './components/Error'
import { AuthProvider } from "./components/security/AuthContext";




import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'




import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';








// Layout Component
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-fill">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


function App() {
  return (
    <AuthProvider>

    
    <BrowserRouter>
      <Routes>

        {/* Login Page WITHOUT Header */}
        <Route path="/" element={<Login />} />

        {/* Pages WITH Header */}
        <Route element={<Layout />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/todos" element={<Todo />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
