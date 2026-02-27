import React from 'react'
import { Link} from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const {id,img,title,desc,chef,ing}=recipe
  return (
    <Link className=' hover:scale-102 duration-150 mr-3 mb-3  block w-[23vw] rounded overflow-hidden' 
    to={`/recipe/details/${id}`}>
      <img src={img}></img>
      <h1 className=' mt-2 font-black px-2'>{title}</h1>
      <small className=' px-2 text-red-600'>{chef}</small>
      <p>{desc.slice(0,100)}... <small className=' text-blue-500 px-2 pb-3'>more</small></p>

    </Link>
  )
}

export default RecipeCard