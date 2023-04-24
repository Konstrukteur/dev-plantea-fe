import { Routes, Route } from "react-router-dom";
// import AuthState from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Plants from "./components/Plants";
import Plant from "./components/Plant";
import Sidebar from "./components/Sidebar.jsx";
import "./stylesheets/App.css";

const App = () => {
  return (
    // <AuthState>
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<Plant />} />
            <Route path="/recipes" element={<Plants />} />
            <Route path="/recipes/:id" element={<Plant />} />
            <Route path="/effects" element={<Plants />} />
            <Route path="/effects/:id" element={<Plant />} />
            <Route path="/favorites" element={<Plants />} />
            {/* <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/me' element={<Me />} />
        </Route> */}
          </Route>
        </Routes>
      </div>
    </div>

    // </AuthState>
  );
};

export default App;
