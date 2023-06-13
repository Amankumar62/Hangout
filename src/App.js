import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Layout } from "./component/Layout";
import { Signup } from "./pages/Signup";
import { Explore } from "./pages/Explore";
import { Bookmark } from "./pages/Bookmark";
import { Liked } from "./pages/Liked";
import { RequireAuth } from "./auth/RequireAuth";
import "./App.css";
import { MockAPI } from "./pages/Mockman";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Layout />
            </RequireAuth>
          }
        >
          <Route
            index
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            index
            path="/explore"
            element={
              <RequireAuth>
                <Explore />
              </RequireAuth>
            }
          />
          <Route
            index
            path="/bookmark"
            element={
              <RequireAuth>
                <Bookmark />
              </RequireAuth>
            }
          />
          <Route
            index
            path="/liked"
            element={
              <RequireAuth>
                <Liked />
              </RequireAuth>
            }
          />
        </Route>
        <Route path="/mockman" element={<MockAPI />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
