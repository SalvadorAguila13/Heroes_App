import { Routes, Route } from "react-router-dom"
import LoginPage from "../auth/pages/LoginPage"
import HeroesRoutes from "../Heroes/routes/HeroesRoutes"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"


const AppRouter = () => {
  return (
    <>        
        <Routes>

          <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>} />
         
          <Route path="/*" element={
            <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>} />

          {/* <Route path="login" element={ <LoginPage />} /> */}
          {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
        </Routes>
    </>
  )
}

export default AppRouter