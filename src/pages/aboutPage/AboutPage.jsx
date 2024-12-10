import React from 'react';
import styles from './aboutPage.module.css'
import Description from "../../components/description/Description";

function AboutPage() {
    const info = {title: "Title 2", description: "description 2"};

    return (
        <div className={styles.aboutPage}>
           <h1>About Page</h1>
           <Description info={info}/>
        </div>
    );
}

export default AboutPage;