import React from 'react';
import style from './Home.module.css';
import Footer from '../footer/footer.js';
import Navbar from '../Navbar/navbar.js';
import Dogs from '../Dogs/dogs.js';


function Home (){
    return(
        <div className = {style.homeContainer}>
            <Navbar />
            <Dogs/>
            <Footer />
        </div>
    )

}

export default Home;