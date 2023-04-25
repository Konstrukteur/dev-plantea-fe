import { Routes, Route } from "react-router-dom";
// import AuthState from "./contexts/AuthContext";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Plants from "./components/Plants";
import PlantDetails from "./components/PlantDetails";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Effects from "./components/Effects";
import EffectDetails from "./components/EffectDetails";
import "./stylesheets/App.css";

const App = () => {
  return (
    // <AuthState>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/plants' element={<Plants />} />
        <Route path='/plants/:id' element={<PlantDetails />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeDetails />} />
        <Route path='/effects' element={<Effects />} />
        <Route path='/effects/:id' element={<EffectDetails />} />
        {/* <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/me' element={<Me />} />
        </Route> */}
      </Route>
    </Routes>
    // </AuthState>
  );
};

export default App;
