import { Routes, Route } from "react-router-dom";
// import AuthState from "./contexts/AuthContext";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Plants from "./components/Plants";
import PlantDetails from "./components/PlantDetails";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Effects from "./components/Effects";
import EffectDetails from "./components/EffectDetails";
import Favorites from "./components/Favorites";
import Location from "./components/Location";
import Footer from "./components/Footer";
import "./stylesheets/App.css";

const App = () => {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div id="page-wrap">
        {/* <AuthState> */}
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/plants" element={<Plants />} />
            <Route path="/plants/:id" element={<PlantDetails />} />
            <Route path="/effects" element={<Effects />} />
            <Route path="/effects/:id" element={<EffectDetails />} />          
            <Route path="/location" element={<Location />} />
            {/* ToDo: Favorites will be a protected route */}
            <Route path="/favorites" element={<Favorites />} />
            {/* <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/me' element={<Me />} />
        </Route> */}
          </Route>
        </Routes>
        {/* </AuthState> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
