import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { UserStorage } from "./UserContext";
import { User } from "./Pages/User/User";
import { ProtectedRoutes } from "./Components/Helpers/ProtectedRoutes";
import { Photo } from "./Components/Photo/Photo";
import { UserProfile } from "./Pages/User/Profile/UserProfile";
import { NotFound } from "./NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRoutes>
                  <User />
                </ProtectedRoutes>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
