import React from 'react';
import styles from  './description.module.css';


function Description({info}) {
    return (
        <div className={styles.description}>
            <h2>{info.title}</h2>
            <p>{info.description}</p>
        </div>
    );
}

export default Description;