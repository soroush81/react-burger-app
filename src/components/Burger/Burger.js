import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    return (
    <div className="Burger">
        <BurgerIngredient type="bread-top" />
        <BurgerIngredient type="meat" />
        <BurgerIngredient type="cheese" />
        <BurgerIngredient type="bacon" />
        <BurgerIngredient type="salad" />
        <BurgerIngredient type="bread-bottom" />
    </div>
    );
}

export default burger;
