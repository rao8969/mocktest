import { Route, Routes } from "react-router-dom";

function AllRoutes() {
  return ( 
  <div>
    <Routes>
    <Route path="/home"element={<h1>Home Page</h1>} />
    <Route path="/contact"element={<h1>Contact Page</h1>} />
    <Route path="/about"element={<h1>About Page</h1>} />
    <Route path="/login"element={<h1>Login Page</h1>} />
    <Route path="/services"element={<h1>Services Page</h1>} />
      </Routes>
      </div>
      )
}

export default AllRoutes;