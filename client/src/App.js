import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/search" element={<Search/>}/> 
        <Route path="/recipes" element={<Recipes/>}/> 
        <Route path="/Recipe/:recipeId" element={<Recipe/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
