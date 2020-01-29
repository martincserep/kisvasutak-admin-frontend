import React from 'react';
import { Container } from "react-grid-system";

import sytles from "./Home.module.scss";

import TopHeader from '../../components/Header';

/**
* @author martincserep
* @function Home
* */

const Home = () => {
    return(
        <>
            <div className={sytles.bgHider} />
            <TopHeader />
            <Container>
                    Home
            </Container>
        </>
    );
}

export default Home;