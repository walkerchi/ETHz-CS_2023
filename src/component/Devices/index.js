import React    from 'react';
import styles from "./styles.module.css"

export default function Devices({children}){
    return (<section  className={styles.container}>
        {children}
        <div className={styles.section}>Devices</div>
    </section>)
}