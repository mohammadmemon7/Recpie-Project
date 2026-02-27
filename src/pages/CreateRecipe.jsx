import React, { use, useContext } from "react";
import { set, useForm } from "react-hook-form";
import {nanoid} from "nanoid";
import { recipescontext } from "../context/Recipecontext";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const { register, handleSubmit,reset } = useForm();
  const {data,setdata}=useContext(recipescontext)
  const navigate=useNavigate()

  function submitHandler(recipe){
    recipe.id=nanoid()
    // console.log(recipe);
    // const copyData=[...data]
    // copyData.push(recipe)
    // setdata(copyData)

    setdata([...data,recipe])
    toast.success("Recipe Created")
    reset()
    navigate("/recipes")
  }
  return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          type="url"
          className="block border-b outline-0 p-2" 
          {...register("img")}
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
          {...register("desc")}
          placeholder="Recipee Description"
        />
    
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("ingr")}
          placeholder="Write Ingridients"
        />
    
        <textarea
          type="text"
          className="block border-b outline-0 p-2" 
          {...register("inst")}
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
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="lnacks">Snacks</option>
          <option value="dinner">Dinner</option>
        </select>
    

        <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">Save Recipe</button>
      </form>
  );
};

export default CreateRecipe;
