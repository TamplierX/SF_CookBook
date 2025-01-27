import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../styles/Home.css';


const Home = () => {
    const [categories, setCategories] = useState(null);

    let getCategoriesData = async () => {
        axios
            .get('http://127.0.0.1:8000/api/categories/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
            console.log('Ошибка: ', error);
            });

    };

    useEffect(() => {
        getCategoriesData();
    }, []);

    if (!categories) {
        return (
            <div>
                <h2>Не получилось получить данные с сервера. Пожалуйста, зайдите на страницу позже.</h2>
            </div>
        );
    }
    
    return (
        <div className='home-container'>
            <h1>Типы блюд:</h1>
            <div className='categories-list'>
                {categories.map((category, index) => (
                    <div className='categories-list-item' key={index}>
                        <Link to={`/category/${category.id}`}>
                                <h2>{category.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;