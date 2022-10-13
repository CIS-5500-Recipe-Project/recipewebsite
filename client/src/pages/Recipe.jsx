import Topbar from "../components/Topbar";
import RecipeMain from "../components/RecipeMain";
import RecipeContent from "../components/RecipeContent";
export default function Recipe() {
  return (
    <div>
      <Topbar/>
      <RecipeMain/>
      <RecipeContent/>
    </div>
  );
}