import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";
import { Layout } from "./component/Layout.jsx";
import { Signup } from "./Signup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
