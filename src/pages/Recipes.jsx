import React, { useContext } from "react";
import { recipescontext } from "../context/Recipecontext";

const Recipes = () => {
  const { data } = useContext(recipescontext);

  const renderRecipe = 
    data.map((recipe) => (
      <div key={recipe.id}>
        <h1>{recipe.title}</h1>
      </div>
    ));
  
  return <div>
    {renderRecipe}
  </div>;
};

export default Recipes;
