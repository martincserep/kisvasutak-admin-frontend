import React, { Component } from 'react';
import { Container } from "react-grid-system";

import sytles from "./Home.module.scss";

import TopHeader from '../../components/Header';
import Card from '../../components/common/Card';


import RotateLoader from "react-spinners/RotateLoader";
/**
* @author martincserep
* @function Home
* */

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/trains/1OVBAM9ZNlZI45yCYZRckOgXJRj1')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            });
    }

render() {
    
    var rawData = this.state.items;
    var isLoaded = this.state.isLoaded;
    var items = [];
    var trainId = '';
        
    if (!isLoaded) {
        return(
            <>
                <div className={sytles.middle}>
                    <RotateLoader
                        size={50}
                        margin={30}
                        />
                </div>
                <TopHeader />

            </>
        );
    } else {
        Object.keys(rawData).map(item=> {
            items.push({"key": item, "value": rawData[item]});
        })

        
        return(
            <>
                <TopHeader />
                <Container>
                    <div className={sytles.homeContainer}>
                        {/* {Object.keys(items).forEach(item=> (
                            <span>items[item].name</span>
                            // <Card title={item.name} image={item.imgUrl} />
                        ))} */}
                        {items.map(item=> (
                            trainId = item.key.substr(1),
                            <Card key={item.key} title={item.value.name} image={item.value.imgUrl} isTrain={true} accomHref={'/accomodations/'+trainId} sightsHref={'/sights/'+trainId} />
                        ))};
                    </div>
                </Container>
            </>
        );
    }
}
}
export default Home;