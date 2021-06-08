import React from 'react';
import style from './Home.module.css';
import Footer from '../footer/footer.js'

export default function Home (){

    return(
        <div className = {style.homeContainer}>
            <p>Hola putitos</p>
            <Footer />
        </div>
    )

}

