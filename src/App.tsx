import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home/Home"
import Dashboard from "./pages/Dashboard/Dashboard"
import PrivateRoute from "./routes/PrivateRoute"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>}
          />
      </Routes>
    </>
  )
}

export default App
