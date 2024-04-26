import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Toast from "./components/global/Toast";
import ProtectedRoute from "./components/routeProtector/ProtectedRoute";
import PublicRoute from "./components/routeProtector/PublicRoute";

export default function App() {
  return (
    <>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <SignIn />
                </PublicRoute>
              }
            />
            <Route
              path="/registration"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </MainLayout>
      <Toast />
    </>
  );
}
