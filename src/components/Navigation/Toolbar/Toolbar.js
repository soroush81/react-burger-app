import React from 'react';
import './Toolbar.css';
import '../../Logo/Logo';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <Logo />
            <NavigationItems />
        </header>
    );
}


export default Toolbar;