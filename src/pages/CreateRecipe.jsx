import React, { use, useContext } from "react";
import { set, useForm } from "react-hook-form";
import {nanoid} from "nanoid";
import { recipescontext } from "../context/Recipecontext";

const CreateRecipe = () => {
  const { register, handleSubmit,reset } = useForm();
  const {data,setdata}=useContext(recipescontext)

  function submitHandler(recipe){
    recipe.id=nanoid()
    // console.log(recipe);
    // const copyData=[...data]
    // copyData.push(recipe)
    // setdata(copyData)

    setdata([...data,recipe])
    reset()
  }
  return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="url"
          className="block border-b outline-0 p-2" 
          {...register("image")}
          placeholder="Enter Image URL"

        />
        <small className=" text-red-400">This is how the error is shown</small>
        <input
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("title")}
          placeholder="Recipee Title"
        />
    
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("description")}
          placeholder="Recipee Description"
        />
    
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("ingridients")}
          placeholder="Write Ingridients"
        />
    
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("instructions")}
          placeholder="Recipee Instructions"
        />
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("chef")}
          placeholder="Chef Name"
        />
        <select
          className="block border-b outline-0 p-2 text-black" 
          {...register("category")}
          
        >
          <option value="cat1">Category 1</option>
          <option value="cat2">Category 2</option>
          <option value="cat3">Category 3</option>
        </select>
    

        <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">Save Recipe</button>
      </form>
  );
};

export default CreateRecipe;
