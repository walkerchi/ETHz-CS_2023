import React    from 'react';
import styles from "./styles.module.css"

export default function Background({children}){
    return (<section className={styles.container}>
        {children}
        <div className={styles.section}>Background</div>
    </section>)
}