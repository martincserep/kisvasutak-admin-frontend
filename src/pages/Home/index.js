import React from 'react';
import { Container } from "react-grid-system";

import sytles from "./Home.module.scss";

import TopHeader from '../../components/Header';
import Card from '../../components/common/Card';

/**
* @author martincserep
* @function Home
* */

const Home = () => {
    return(
        <>
            <TopHeader />
            <Container>
                <div className={sytles.homeContainer}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Container>
        </>
    );
}

export default Home;