import React from 'react'

import classes from './navigation.module.css'

const Navigation = () =>{


    return (
        <nav className={classes['nav']}>
            <div className={classes['container']}>
            <a href="/Cart">Your Cart    0 </a>
            </div>
        </nav>
    )
}

export default Navigation