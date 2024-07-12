import { Route, Routes } from "react-router-dom"
import { Login } from "./component/Login"
import { Register } from "./component/Register"
import { Forgot } from "./component/Forgot"
import { Reset } from "./component/Reset"
import { Display } from "./component/Display"

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/resetPassword/:token" element={<Reset />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </div>
  )
}

export default App
