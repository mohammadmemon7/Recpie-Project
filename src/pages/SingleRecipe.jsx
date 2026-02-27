import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { recipescontext } from '../context/Recipecontext';
import { toast } from 'react-toastify';


  

  

const SingleRecipe = () => {
    const {data,setdata}=useContext(recipescontext)
    const params=useParams()
    const recipe=data.find((recipe)=>params.id==recipe.id);
    const { register, handleSubmit,reset } = useForm({defaultValues:{
      title:recipe.title,
      chef:recipe.chef,
      img:recipe.img,
      inst:recipe.inst,
      desc:recipe.desc,
      cat:recipe.cat,
      ingr:recipe.ingr
    }});
    const navigate=useNavigate()
    // console.log(recipe);
    
    // console.log(data,params.id);
    function submitHandler(recipe){
      const indx=data.findIndex((item)=>params.id==item.id)
      const copy=[...data]
      copy[indx]={...copy[indx],...recipe}
      setdata(copy)

      console.log(recipe)
    }

    function deleteHandler(){
      const filterData=data.filter(r=>params.id!=r.id)
      setdata(filterData)
      navigate("/recipes")
    }

  return (
    <div className='flex w-full'>
        <div className='left w-1/2 p-2'>
            <h1 className='text-5xl font-black'>{recipe.title}</h1>
            <img src={recipe.img} className=' h-[20vh] '></img>
            <h1>{recipe.chef}</h1>
            <h1>{recipe.desc}</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} className='w-1/2'>
        <input
          type="url"
          className="block border-b outline-0 p-2 w-full" 
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
          {...register("chef")}
          placeholder="Chef Name"
          
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
        
        <select
          className="block border-b outline-0 p-2 text-black" 
          {...register("category")}
          
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="lnacks">Snacks</option>
          <option value="dinner">Dinner</option>
        </select>
    

        <button className="block mt-5 bg-gray-900 px-4 py-2 rounded">Update Recipe</button>
        <button className="block mt-5 bg-red-900 px-4 py-2 rounded" onClick={deleteHandler}>Delete Recipe</button>
      </form>
    </div>
  )
}

export default SingleRecipe
