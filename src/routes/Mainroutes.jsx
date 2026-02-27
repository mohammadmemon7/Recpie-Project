import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import CreateRecipe from '../pages/CreateRecipe'
import SingleRecipe from '../pages/SingleRecipe'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/recipes' element={<Recipes/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/createrecipe' element={<CreateRecipe/>}></Route>
            <Route path='/recipe/details/:id' element={<SingleRecipe/>}></Route>
        </Routes>
    </div>
  )
}

export default Mainroutes