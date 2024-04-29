import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import ProtectedRoute from "./components/routeProtector/ProtectedRoute";
import PublicRoute from "./components/routeProtector/PublicRoute";

export default function AppRouter() {
  return (
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
          path="/chat/:id"
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
  );
}
