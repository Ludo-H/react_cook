import React, { useState } from 'react';
import axios from 'axios';
import Recipe from './Recipe';

const Recipes = ({input}) => {

    //stocker les données fetcher
    const [recipes, setRecipes] = useState();


    const fetchRecipes = async ()=>{
        await axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`)
        .then((res)=> setRecipes(res.data.meals))
        .catch((error)=> console.log(error))
    }
    fetchRecipes();


    const filteredRecipe = recipes && recipes.filter((recipe)=>{
        if (input === '') {
            return recipe
        } else {
            return recipe.strMeal.toLowerCase().includes(input)
        }
    })
    


    return (
        <ul className='recipes-container'>
            {filteredRecipe && filteredRecipe.map((recipe)=>(
                <Recipe key={recipe.idMeal} recipe={recipe} />
            ))}
        </ul>
    );
};

export default Recipes;