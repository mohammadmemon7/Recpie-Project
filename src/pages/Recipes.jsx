import React, { useContext } from "react";
import { recipescontext } from "../context/Recipecontext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { data } = useContext(recipescontext);

  const renderRecipe = 
    data.map((recipe,idx) => (
      <RecipeCard recipe={recipe} key={idx}/>
    ));
  
  return <div className="flex flex-wrap">
    {renderRecipe}
  </div>;
};

export default Recipes;
