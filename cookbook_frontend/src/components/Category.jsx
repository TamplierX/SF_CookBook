import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router';
import axios from 'axios';

import '../styles/Category.css';


const Category = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);
    const [recipes, setRecipes] = useState(null);
    
    let getCategoryData = async () => {
        axios
            .get('http://127.0.0.1:8000/api/recipes/?category=' + categoryId)
            .then((response) => {
                setCategory(response.data[0].category);
                setRecipes(response.data);
            })
            .catch((error) => {
                console.log('Ошибка: ', error);
            });
    };

    useEffect(() => {
        getCategoryData();
    }, [categoryId]);

    if (!recipes) {
        return (
            <div>
                <h2>Не получилось получить данные с сервера. Пожалуйста, зайдите на страницу позже.</h2>
            </div>
        );
    }

    return (
        <div className="category-container">
            <h1>{category.name}:</h1>
            <div className="recipes-list">
                {recipes.map((recipe, index) => (
                    <div className="recipes-list-item" key={index}>
                        <Link to={`/category/${category.id}/recipes/${recipe.id}`}>
                            <h2>{recipe.title}</h2>
                            <p>{recipe.description}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;