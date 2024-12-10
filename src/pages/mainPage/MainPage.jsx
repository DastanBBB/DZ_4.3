import React from 'react';
import styles from './mainPage.module.css'
import Description from "../../components/description/Description";


function MainPage(props) {
    const info = {title: "Title", description: "description"};
    return (
        <div className={styles.mainPage}>
            <h1> Main Page</h1>
            <Description info={info}/>
        </div>
    );
}

export default MainPage;