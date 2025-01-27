import React from "react";
import {Routes, Route } from "react-router";

import Header from "./Header.jsx";
import CategoryList from "./CategoryList.jsx";
import RecipeList from "./RecipeList.jsx";
import RecipeDetail from "./RecipeDetail.jsx";

import '../styles/App.css';



function App() {
    return (
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="*" element={<CategoryList />} />
                    <Route
                        path="/category/:categoryId"
                        element={<RecipeList />}
                    />
                    <Route
                        path="/category/:categoryId/recipes/:recipeId"
                        element={<RecipeDetail />}
                    />                       
                </Routes>
            </div>
    ); 
};

export default App;