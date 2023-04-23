import React    from 'react';
import styles from "./styles.module.css"

export default function Tokamak({children}){
    return (<section  className={styles.container}>
        {children}
        <div className={styles.section}>Tokamak</div>
    </section>)
}