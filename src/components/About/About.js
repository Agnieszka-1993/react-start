import PageTitle from '../PageTitle/PageTitle';
import styles from './About.module.scss';
import React from 'react';

const About = () => {
    return (
        <div className={styles.about}>
            <PageTitle>About</PageTitle>
        </div>
    );
};

export default About;