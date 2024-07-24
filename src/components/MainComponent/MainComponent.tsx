import React from 'react';
import {Link} from "react-router-dom";
import styles from './MainComponent.module.css'

const MainComponent = () => {
    return (
        <div className={styles.wrapper}>
            <span><Link to={''} className={styles.links}>Home page</Link></span>
            <span><Link to={'todos'} className={styles.links}>todos page</Link></span>
            <span><Link to={'add'} className={styles.links}>new todo page</Link></span>
            <span><Link to={'random'} className={styles.links}>random todo page</Link></span>
        </div>
    );
};

export default MainComponent;