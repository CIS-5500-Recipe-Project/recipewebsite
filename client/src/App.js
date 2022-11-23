import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";

function App() {
  return (
    //this is a test
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/search" element={<Search/>}/> 
        <Route path="/recipes" element={<Recipes/>}/> 
        <Route path="/Recipe/:recipeId" element={<Recipe/>}/> 
      </Routes>
    </Router>
    // <Recipe recipeId={102} />
  );
}

export default App;
