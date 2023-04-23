import React    from 'react';
import styles from "./styles.module.css"

export default function Introduction({children}){
    return (<section className={styles.container}>
        {children}
        <div className={styles.section}>Introduction</div>
    </section>)
}