import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import '../styles/Recipes.css';


const Recipes = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);

    let getRecipeData = async () => {
        axios
            .get(`http://127.0.0.1:8000/api/recipes/${recipeId}`)
            .then((response) => {
                setRecipe(response.data);
            })
            .catch((error) => {
                console.log('Ошибка: ', error);
            });
    };

    useEffect(() => { 
        getRecipeData();
    }, [recipeId]);

    return (
        <div className='recipe-container'>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <h3>Продукты:</h3>
            <p style={{ whiteSpace: 'pre-line' }}>
                {recipe.products}
            </p>
            <h3>Пошаговый рецепт:</h3>
            <p style={{ whiteSpace: 'pre-line'}}>
                {recipe.instruction}
            </p>
        </div>
    );
};

export default Recipes;