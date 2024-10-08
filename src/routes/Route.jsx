import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import Home from './../pages/home/Home';
import LoginPage from "../pages/loginPage/LoginPage";
import PrivateRoute from "./PrivateRoute";


function RoutesWrap() {
  return (
    createBrowserRouter(
      createRoutesFromElements(
        <>
            <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<RootLayout />}>
            <Route element={<PrivateRoute />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </>
      )
    )
  )
}

export default RoutesWrap