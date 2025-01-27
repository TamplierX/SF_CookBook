import React from "react";
import {Routes, Route } from "react-router";

import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Category from "./Category.jsx";
import Recipes from "./Recipes.jsx";

import '../styles/App.css';



function App() {
    return (
            <div className="main-container">
                <Header />
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route
                        path="/category/:categoryId"
                        element={<Category />}
                    />
                    <Route
                        path="/category/:categoryId/recipes/:recipeId"
                        element={<Recipes />}
                    />                       
                </Routes>
            </div>
    ); 
};

export default App;