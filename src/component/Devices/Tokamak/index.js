import React    from 'react';
import styles from "./styles.module.css"
export default function DevicesTokamak({markdown}){
    return (<section data-markdown={markdown} className={styles.container}>
    </section>)
}