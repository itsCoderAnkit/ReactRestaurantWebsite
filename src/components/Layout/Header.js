import React, { Fragment } from 'react'

import classes from './Header.module.css'
import Button from '../UI/Button'
//import Navigation from './Navigation'
import mealsImage from '../../assets/Untitled.jpg'




const Header = (props) => {

    return (
        <Fragment>
            <header className={classes['main-header']}>
                <h1>ReactMeals</h1>
                <Button buttonPressed={props.showCart}></Button>
            </header>
            <div className={classes['image-container']}>
                <img src={mealsImage} alt='table full of dishes'></img>
            </div>
        </Fragment>
    )
}

export default Header