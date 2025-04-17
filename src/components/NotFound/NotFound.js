import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <PageTitle>404 Not Found</PageTitle>
        </div>
    );
};

export default NotFound;