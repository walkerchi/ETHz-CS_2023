import React from 'react';
import { useEffect,useRef,useState } from 'react';
import styles from "./styles.module.css"
import * as ReactDom from 'react-dom'

function QRCode(){
    console.log(styles)
    return (
        <div className={styles['qr-container']}>
            <div>
                <img src="https://walkerchi.github.io/ETHz-CaseStudy-2022/url.png" alt="space elevator"/>
                <div> space elevator (Case Study 2022) </div>
            </div>
            <div>
                <img src="https://walkerchi.github.io/ETHz-CaseStudy-2022/url.png" alt="fusion" />
                <div> nuclear fusion (Case Study 2023) </div>
            </div>
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

            <h1>Infinite Energy is closer than you think</h1>
            <center>Chi.Mingyuan</center>
            <QRCode/>
                
    </section>
    )
}