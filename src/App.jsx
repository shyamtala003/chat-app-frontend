import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import SignIn from "./pages/signin/SignIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";

export default function App() {
  return (
    <MainLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/registration" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </MainLayout>
  );
}
