import React    from 'react';
import styles from "./styles.module.css"

export default function Conclusion({children}){
    return (<section className={styles.container}>
        {children}
    </section>)
}