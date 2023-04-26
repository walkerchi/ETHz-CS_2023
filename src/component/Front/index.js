import React from 'react';
import { useEffect,useRef,useState } from 'react';
import styles from "./styles.module.css"
import Qr2022 from "../../images/ethz-case-study-2022.png"
import Qr2023 from "../../images/ethz-case-study-2023.png"


function QRCode(){
    console.log(styles)
    return (
        <div className={styles['qr-container']}>
            <a href="https://walkerchi.github.io/ETHz-CaseStudy-2022">
                <img src={Qr2022} alt="space elevator"/>
                <div > space elevator (Case Study 2022) </div>
            </a>
            <a href="https://walkerchi.github.io/ETHz-CaseStudy-2023">
                <img src={Qr2023} alt="fusion" />
                <div> nuclear fusion (Case Study 2023) </div>
            </a>
        </div>
    )
}


export default function FrontPage({markdown}){

    const ref = useRef(null)
    return (
    <section 
            className={styles.container}
            // data-markdown={markdown} 
            data-background-image="https://s2.loli.net/2023/04/21/JQP8brgIDqsZClK.jpg" 
            data-background-size="85%" 
            data-background-position="center center"
            data-background-opacity={0.3}
            ref = {ref}
            >

            <h1>Fusion Power is closer than you think</h1>
            <center>Chi.Mingyuan</center>
            <QRCode/>
                
    </section>
    )
}