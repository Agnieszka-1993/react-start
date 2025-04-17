import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import React from 'react';

const Favorite = () => {
    return (
        <div className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
        </div>
    );
};

export default Favorite;