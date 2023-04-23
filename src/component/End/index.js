import React from 'react';
import Dmath from "../../svg/dmath"
import styles from "./styles.module.css"

export default function EndPage(){

    return (
    <section 
            className={styles.container}
            >
            <div className={styles.thanks}>
                Thanks for your attention!
            </div>
            <div className={styles.foot}>
                <div className={styles.dmath}>
                    <Dmath/>
                </div>
                <div className={styles.info}>
                    <strong className={styles.name}>Mingyuan Chi</strong>
                    <div className={styles.email}>minchi@student.ethz.ch</div>
                </div>
            </div>   
    </section>
    )
}